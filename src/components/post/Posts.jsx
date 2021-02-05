import React, { useState, useEffect } from 'react'
import "./posts.scss"

const Posts = (props) => {
    const [posts, setPosts] = useState([])

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
                                    <div className="post-btns">

                                        <button
                                            className="Edit"
                                            onClick={() => {
                                                props.editPost(item.id)
                                            }}
                                        ><i class="far fa-edit"></i></button>
                                        <button
                                            className="delete"
                                            onClick={() => {
                                                props.deletePost(item.id)
                                            }
                                            }
                                        ><i class="far fa-trash-alt"></i></button>

                                    </div>
                                </div>
                            </div>
                        </div>

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