import React, { useState, useEffect } from 'react'
import "./posts.scss"

const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (props.posts) {
            let newPosts = []
            for (const [key, value] of Object.entries(props.posts)) {
                // setPosts({
                //     id: key,
                //     body: value.body
                // })
                // console.log(key)
                // console.log(value.body)
                let post = {
                    id: key,
                    body: value.body
                }
                newPosts.push(post)
            }
            newPosts.reverse();
            setPosts(newPosts)
        }
    }, [props.posts])
    return (
        <div className="posts">
            {posts ?
                (
                    posts.map(item => (
                        <div className="post" onClick={(e) => {
                            console.log(e.target.id)
                        }} id={item.id}>
                            <p>{item.body}</p>
                            <div className="btns">
                                <button className="delete" onClick={props.deletePost}>Delete</button>
                                <button className="Edit" onClick={props.editPost}>Edit</button>
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