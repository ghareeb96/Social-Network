import React, { useEffect, useState } from 'react'
import Posts from '../post/Posts'
import "./Home.scss"

const Home = (props) => {

    const [gotUser, setGotUser] = useState(false);





    const editPost = () => {

    }
    const deletePost = () => {

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
                            // console.log(value.email)
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

                            Object.values(props.users).map(item =>
                                <a href="#" className="link">{item.name}</a>
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

