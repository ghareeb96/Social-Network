import React, { useEffect, useState } from 'react'
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


    return (

        <div className="home">

            {props.currentUser ?

                (<>
                    <div className="header">
                        <h1>Welcome Back {props.currentUser.name}</h1>
                        <button onClick={props.handleLogout}>Logout</button>
                    </div>

                    <div className="posts-container">
                        <div className="add-post">
                            <input
                                type="text"
                                name="newPost"
                                value={props.postText}
                                onChange={(e) => props.setPostText(e.target.value)} />

                            <button
                                className="add"
                                onClick={() => { props.addPost() }}
                            >
                                Post</button>
                        </div>


                        <Posts
                            posts={props.currentUser.posts}
                            deletePost={deletePost}
                            editPost={editPost}
                        />


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



                </>
                )
                :
                ""
            }
        </div >

    )
}
export default Home;

