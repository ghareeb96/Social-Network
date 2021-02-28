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
            <div className="user-profile">
                <div className="header">
                    <div className="image-container">
                        <div className="image">
                            <img src={user.profilePic} alt="PP" />
                        </div>
                    </div>
                    <div className="header-middle">
                        <div className="follow-btn">
                            <button className="follow"><i className="fas fa-plus"></i> Follow                             <span>Soon</span>
                            </button>
                        </div>
                        <div className="name">
                            <h1>{user.name}</h1>
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="followings">
                            <h4>Followings</h4>
                            <span>10</span>
                        </div>
                        <div className="followers">
                            <h4>Followers</h4>
                            <span>10</span>
                        </div>
                    </div>
                </div>

                <div className="main">

                    <div className="tabs">
                        <ul className="tab-links">
                            <li className="link">
                                <Link to={"/Home"}>
                                    <i className="fas fa-home"></i> Home
                        </Link>
                            </li>

                            <li className="link">
                                <Link to={"/Profile"}>
                                    <i className="fas fa-user"></i> Profile
                        </Link>
                            </li>

                            <li className="link disabled">
                                <Link to={"/Notifications"} >
                                    <i className="fas fa-bell"></i> Notifications
                        </Link>
                                <span>Soon</span>
                            </li>

                            <li className="link disabled">
                                <Link to={"/Messages"}>
                                    <i className="fas fa-envelope"></i> Messages
                        </Link>
                                <span>Soon</span>

                            </li>

                            <li className="link disabled">
                                <Link to={"/Settings"}>
                                    <i className="fas fa-cogs"></i> Settings
                        </Link>
                                <span>Soon</span>

                            </li>

                            <li className="link">
                                <button onClick={() => {
                                    props.handleLogout()
                                }}>
                                    <i className="fas fa-sign-out-alt"></i> Sign Out
                        </button>
                            </li>
                        </ul>
                    </div>

                    <div className="timeline">

                        <div className="posts-section">
                            <Posts
                                currentUser={user}
                                image={user.profilePic}
                                viewIcons={false}
                            />
                        </div>
                    </div>

                    <div className="users-section">

                        <div className="users">

                            <div className="headline">
                                <h3>People you may know</h3>
                            </div>
                            <div className="users-container">

                                {users ?
                                    Object.entries(users)
                                        .filter((item, index) => item[1].email !== user.email && item[1].email !== props.location.state.mainUser.email && index <= 7)
                                        .map((item) =>
                                            <div className="user">
                                                <div className="image">
                                                    <img src={item[1].profilePic} alt="PP" />
                                                </div>
                                                <div className="userName">
                                                    <Link to={{
                                                        pathname: `/users/${item[0]}`,
                                                        state: {
                                                            users: users,
                                                            mainUser: props.location.state.mainUser
                                                        }
                                                    }}
                                                        key={item[0]}>
                                                        {item[1].name}
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    :
                                    ""
                                }
                            </div>
                        </div>
                    </div>


                </div>
            </div >

        )
    } else {
        return (
            <>
            </>
        )
    }
}
export default Users;

