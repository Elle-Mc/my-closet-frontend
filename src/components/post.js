import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    //////////////////
    // Style Objects
    //////////////////
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%"
    };

    return (
        <div style={div}>
            <Link to={`/post/${post.id}`}>
                <h1>{post.piece}</h1>
            </Link>
            <h2>{post.details}</h2>
            <img src={post.picture} alt="" />
        </div>
    )
};

export default Post;