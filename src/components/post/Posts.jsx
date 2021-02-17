import React, { useState, useEffect } from 'react'
import "./posts.scss"
import { gsap, TweenLite } from "gsap";


const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const [newText, setNewText] = useState("")
    const [modal, setModal] = useState(false)
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        if (props.posts) {
            let newPosts = []
            for (const [key, value] of Object.entries(props.posts)) {
                let post = {
                    id: key,
                    body: value.body,
                    date: value.date
                }
                newPosts.push(post)
            }
            newPosts.reverse();
            setPosts(newPosts)
        } else {
            setPosts([])
        }

    }, [props.posts])

    useEffect(() => {
        if (posts.length !== 0 && firstRender) {
            TweenLite.fromTo(".post-container",
                {
                    css: {
                        opacity: 0,
                        x: 100
                    }
                },
                {
                    css: {
                        opacity: 1,
                        x: 0
                    },
                    duration: 1,
                    yoyo: true,
                    stagger: 0.2
                }
            )
            setFirstRender(false)
        } else if (posts.length !== 0 && !firstRender) {
            let selector = document.querySelectorAll(".post-container")[0];
            TweenLite.fromTo(selector,
                {
                    css: {
                        opacity: 0,
                        x: 100
                    }
                },
                {
                    css: {
                        opacity: 1,
                        x: 0
                    },
                    duration: 1,
                    yoyo: true,
                    stagger: 0.2
                }
            )
        }

    }, [posts])

    useEffect(() => {

        if (modal) {

            TweenLite.from(".modal", 0.3, {
                scale: 0
            })
        }

    }, [modal])


    return (
        <div className="posts">

            {posts ?
                (
                    posts.map(item => (
                        <>
                            <div className={modal ? "modal-container open" : "modal-container"}

                                onClick={(e) => {
                                    if (e.target.classList.contains("modal-container")) {
                                        setModal(false)
                                    }
                                }}>

                                <div className="modal">
                                    <div className="text">
                                        <textarea onChange={(e) => setNewText(e.target.value)} cols="30" rows="10" defaultValue={item.body}></textarea>
                                    </div>
                                    <div className="btns">
                                        <button onClick={() => {
                                            props.editPost(item.id, newText)
                                            setModal(false)
                                            setNewText("")
                                        }}>Done</button>
                                    </div>
                                </div>
                            </div>


                            <div
                                className="post-container"
                                key={item.id}
                            >
                                <div className="post-image">
                                    <div className="image">
                                        <img src={props.image} alt="Picture" />
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="post-body">
                                        <p>{item.body}</p>
                                    </div>
                                    <div className="post-footer">
                                        <div className="post-time"> <p> {item.date}</p></div>
                                        {
                                            props.viewIcons ?
                                                (<div className="post-btns">

                                                    <button
                                                        className="Edit"
                                                        onClick={() => {
                                                            setModal(true)
                                                        }}
                                                    ><i className="far fa-edit"></i></button>
                                                    <button
                                                        className="delete"
                                                        onClick={() => {
                                                            props.deletePost(item.id)
                                                        }
                                                        }
                                                    ><i className="far fa-trash-alt"></i></button>

                                                </div>)
                                                :
                                                ""
                                        }

                                    </div>
                                </div>
                            </div>
                        </>

                    ))
                )
                :
                (
                    <> </>
                )
            }
        </div >
    )
}

export default Posts;