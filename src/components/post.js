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
            </Link>
            <h2>{post.details}</h2>
            <h2>{post.picture}</h2>
        </div>
    )
};

export default Post;