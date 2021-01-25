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
  const [postText, setPostText] = useState("");


  const addPost = () => {
    if (postText.trim() !== "") {
      const date = new Date();

      database.child(`users/${userKey}/posts`).push(
        {
          body: postText,
          date: date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            weekday: "short",
            month: "short",
            year: "numeric"
          })
        }
      )
      setPostText("")

    }
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
      posts: {}
    })

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
    database.child("users").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setUsers(snapshot.val())
      }
    })
    authListener();
  }, [])

  useEffect(() => {
    if (userKey) {
      database.child(`users/${userKey}/posts`).on("value", (snapshot) => {
        let postsArr = snapshot.val();
        if (postsArr !== null) {
          console.log(postsArr)
          setCurrentUser({
            name: currentUser.name,
            email: currentUser.email,
            posts: postsArr
          })
        } else {
          setCurrentUser({
            name: currentUser.name,
            email: currentUser.email,
            posts: {}
          })
        }
      })
    }
  }, [userKey])

  return (
    <div className="App">
      {loggedUser ?
        (

          <Home
            initUser={initUser}
            setFirstLogin={setFirstLogin}
            database={database}
            isFirstLogin={isFirstLogin}
            handleLogout={handleLogout}
            users={users}
            loggedUser={loggedUser}
            setUserKey={setUserKey}
            userKey={userKey}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            addPost={addPost}
            postText={postText}
            setPostText={setPostText}
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
