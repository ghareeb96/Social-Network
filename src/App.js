import React, { useEffect, useState } from 'react'
import './App.scss';
import firebaseDB from "./firebase";
import RegLog from "./components/reg-log/reg-log";
import Home from "./components/Home/Home";

function App() {
  const database = firebaseDB.database().ref();
  const [currentUser, setCurrentUser] = useState({});
  const [initUser, setInitUser] = useState({})
  const [loggedUser, setloggedUser] = useState('');
  const [users, setUsers] = useState([]);
  const [userKey, setUserKey] = useState("");
  const [isFirstLogin, setFirstLogin] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [initPosts, setInitPosts] = useState([]);
  const [postText, setPostText] = useState("");


  const getSnap = () => {
    database.child("users").on("value", (snapshot) => {
      setUsers(snapshot.val())
    })
  }
  const getInitialPosts = async () => {
    let rnd = Math.floor(Math.random() * (10 - 1 + 1) + 1) + 1;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${rnd}`)
      .then(res => res.json())
      .then(data => {
        setInitPosts(data)
      })
  }
  const authListener = () => {
    firebaseDB.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setloggedUser(user);
      } else {
        setloggedUser("");
      }
    })
  }
  const handleLogout = () => {
    firebaseDB.auth().signOut();
  }
  const clearInput = () => {
    setName("")
    setEmail("");
    setPassword("");
  }
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleSignUp = () => {
    clearErrors();
    setFirstLogin(true)
    setInitUser({
      name: name,
      email: email,
      posts: initPosts
    })
    if (initPosts) {
      firebaseDB.auth().createUserWithEmailAndPassword(email, password)
        .catch(err => {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/email-already-in-use":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        })
    }
  }


  const handleLogin = () => {
    clearErrors();
    setFirstLogin(false)
    firebaseDB.auth().signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })

  }

  useEffect(() => {
    authListener();

    getInitialPosts();
    getSnap();
  }, [])

  return (
    <div className="App">
      {loggedUser ?
        (

          <Home
            initUser={initUser}
            setFirstLogin={setFirstLogin}
            initPosts={initPosts}
            database={database}
            isFirstLogin={isFirstLogin}
            handleLogout={handleLogout}
            users={users}
            loggedUser={loggedUser}
            // addPost={addPost}
            setUserKey={setUserKey}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            postText={postText}
            setPostText={setPostText}
          // posts={posts}
          />
        )
        :
        (
          <RegLog
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            // hasAccount={hasAccount}
            // setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            clearErrors={clearErrors}
            clearInput={clearInput}
          />
        )
      }
    </div>
  );
}

export default App;
