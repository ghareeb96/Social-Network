import React, { useEffect, useState } from 'react'
import {
    Redirect
} from "react-router-dom";
import Posts from '../post/Posts'
import "./Home.scss"

const Home = (props) => {
    const [gotUser, setGotUser] = useState(false);

    const editPost = (e) => {
        console.log(e)
    }

    const deletePost = (e) => {
        if (window.confirm("Are you sure you want to delete this post ?")) {
            props.database.child(`users/${props.userKey}/posts/${e}`)
                .remove(
                    err => {
                        if (err) {
                            console.log(err)
                        }
                    }
                )
        }
    }

    const saveUser = () => {
        props.database.child("users").push(props.initUser);
    }

    const handleUpload = (e) => {
        if (e.target.files[0]) {
            props.setImage(e.target.files[0])
        }
    }


    useEffect(() => {
        if (props.isFirstLogin) {
            saveUser();
            props.setFirstLogin(false);
        }

        if (!gotUser && !props.isFirstLogin) {
            const curUser = () => {
                if (props.users) {
                    for (const [key, value] of Object.entries(props.users)) {
                        if (value.email === props.loggedUser.email) {
                            props.setCurrentUser(value)
                            props.setUserKey(key)
                            setGotUser(true);
                        }
                    }
                }
            }
            curUser();
        }


    }, [props])


    if (props.loggedUser) {
        return (
            <div className="home">
                {props.currentUser ?
                    (<>
                        <div className="header">
                            <div className="image-container">
                                <div className="image">
                                    <img src={props.currentUser.profilePic} alt="PP" />
                                </div>
                            </div>
                            <div className="name">
                                <h1>{props.currentUser.name}</h1>
                                <div className="file-input">
                                    <input type="file" id="myfile" accept="image/*" class="myfile" onChange={handleUpload} />
                                    <label for="myfile"> <i className="fas fa-image"></i> Change Profile Picture</label>
                                </div>
                            </div>
                            <div className="btn">
                                <button onClick={props.handleLogout} className="logout">Sign-Out <i class="fas fa-sign-out-alt"></i>

                                </button>
                            </div>
                        </div>

                        <div className="main">
                            <div className="timeline">
                                <div className="post-input">

                                    <div className="post-text">
                                        <textarea
                                            placeholder="Post something Useful"
                                            cols="50"
                                            rows="6"
                                            name="newPost"
                                            value={props.postText}
                                            onChange={(e) => props.setPostText(e.target.value)} />

                                    </div>

                                    <button
                                        className="add"
                                        onClick={() => { props.addPost() }}
                                    >
                                        Post</button>

                                </div>

                                <div className="posts-container">

                                    <Posts
                                        posts={props.currentUser.posts}
                                        deletePost={deletePost}
                                        editPost={editPost}
                                        image={props.currentUser.profilePic}
                                    />

                                </div>
                            </div>

                            <div className="users">
                                {props.users ?
                                    Object.entries(props.users)
                                        .filter((item) => item[1].email !== props.currentUser.email)
                                        .map((item) =>
                                            <a href="#" className="link" key={item[0]}>{item[1].name}</a>
                                        )
                                    :
                                    ""
                                }
                            </div>
                        </div>
                    </>
                    )
                    :
                    ""
                }
            </div >

        )
    } else {
        return (
            <Redirect to="/"></Redirect>
        )
    }
}
export default Home;

