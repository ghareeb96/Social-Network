import React, { useState, useEffect } from 'react'
import "./posts.scss"

const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (props.posts) {
            for (const [key, value] of Object.entries(props.posts)) {
                console.log(key, value)
            }
        }

    }, [props.posts])
    return (
        <div className="posts">
            {props.posts ?
                (


                    <div className="post">
                        <p></p>
                        <div className="btns">
                            <button className="delete" onClick={props.deletePost}>Delete</button>
                            <button className="Edit" onClick={props.editPost}>Edit</button>
                        </div>
                    </div>


                )
                :
                (
                    <> </>
                )
            }
        </div>
    )
}

export default Posts;