import React, { useEffect, useState } from 'react'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import firebaseDB from "./firebase";
import RegLog from "./components/reg-log/reg-log";
import Home from "./components/Home/Home";
import Users from "./components/users/users";

function App() {
  const database = firebaseDB.database().ref();
  const storage = firebaseDB.storage();

  const [image, setImage] = useState(null);
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
            day: "numeric",
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
    setloggedUser("")
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
      profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
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
  window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    handleLogout();
  });

  useEffect(() => {
    database.child("users").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setUsers(snapshot.val())
      }
    })
    authListener();

  }, [])

  useEffect(() => {
    if (image !== null) {

      const upload = () => {
        const uploadTask = storage.ref(`images/${loggedUser.email}`).put(image)
        uploadTask.on("state_changed",
          snapshot => { },
          error => console.log(error),
          () => {
            storage
              .ref("images")
              .child(loggedUser.email)
              .getDownloadURL()
              .then(url => {
                database.child(`users/${userKey}/profilePic`).set(url)
              })
          }

        )
      }
      upload();
    }
  }, [image])

  useEffect(() => {
    if (loggedUser) {
      database.child(`users/${userKey}`).on("value", (snapshot) => {
        setCurrentUser(snapshot.val())
      })
    } else {
      setCurrentUser("")
      setUserKey("")
    }

  }, [loggedUser])


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Home">
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
              setImage={setImage}
            />
          </Route>
          <Route exact path="/Social-Network/">
            <RegLog
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              loggedUser={loggedUser}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              emailError={emailError}
              passwordError={passwordError}
              clearErrors={clearErrors}
              clearInput={clearInput}
            />
          </Route>
          <Route exact path="/users/:id" component={Users} users={users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
