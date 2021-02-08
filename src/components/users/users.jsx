import React, { useEffect, useState } from 'react'
import {
    Redirect,
    Link
} from "react-router-dom";
import Posts from '../post/Posts'
import "./users.scss"

const Users = (props) => {
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState(null)
    const [goHome, setGoHome] = useState(false)



    useEffect(() => {
        setUsers(props.location.state.users)

        Object.entries(props.location.state.users)
            .map((item) => {
                if (item[0] === props.match.params.id) {
                    setUser(item[1])
                }
            })

    })


    if (user) {
        return (
            <div className="user">

                <div className="header">
                    <div className="image-container">
                        <div className="image">
                            <img src={user.profilePic} alt="PP" />
                        </div>
                    </div>
                    <div className="name">
                        <h1>{user.name}</h1>
                    </div>
                    <div className="btn">
                        <button onClick={() => {
                            setGoHome(true)
                            setUser(null)
                        }}>Home <i className="fas fa-home"></i>
                        </button>
                    </div>
                </div>
                <div className="main">
                    <div className="timeline">
                        <div className="posts-container">
                            <Posts
                                posts={user.posts}
                                image={user.profilePic}
                                viewIcons={false}
                            />
                        </div>
                    </div>
                </div>
            </div >

        )
    } else {
        if (goHome) {
            return (
                <Redirect to="/Home"></Redirect>
            )
        }
        else {
            return (
                <>
                </>
            )
        }
    }
}
export default Users;

