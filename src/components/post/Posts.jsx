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
                    body: value.body
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
                            className="post"
                            key={item.id}
                        >
                            <p>{item.body}</p>
                            <div className="btns">
                                <button
                                    className="delete"
                                    onClick={() => {
                                        props.deletePost(item.id)
                                    }
                                    }
                                >Delete</button>
                                <button
                                    className="Edit"
                                    onClick={() => {
                                        props.editPost(item.id)
                                    }}
                                >Edit</button>
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