import React from 'react'
import "./posts.scss"

const Posts = (props) => {
    return (
        <div className="posts">
            {props.posts.map(item => (
                <div className="post">
                    <p>{item.body}</p>
                    <div className="btns">
                        <button className="delete" onClick={props.deletePost}>Delete</button>
                        <button className="Edit" onClick={props.editPost}>Edit</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts;