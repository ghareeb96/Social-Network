import React, { useState, useEffect } from 'react'
import "./posts.scss"

const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const [newText, setNewText] = useState("")
    const [modal, setModal] = useState(false)

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
    return (
        <div className="posts">

            {posts ?
                (
                    posts.map(item => (
                        <>
                            {modal ?
                                (
                                    <div className="modal-container">
                                        <div className="modal">
                                            <textarea onChange={(e) => setNewText(e.target.value)} cols="30" rows="10" defaultValue={item.body}></textarea>
                                            <button onClick={() => setModal(false)}>Close</button>
                                            <button onClick={() => {
                                                props.editPost(item.id, newText)
                                                setModal(false)
                                                setNewText("")
                                            }}>Done</button>
                                        </div>

                                    </div>
                                )
                                :
                                ""
                            }
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