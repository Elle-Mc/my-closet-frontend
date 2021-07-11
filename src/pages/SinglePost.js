import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ posts, match }) => {
    const id = parseInt(match.params.id); 
    const post = posts.find((posts) => post.id === id);

    //////////////////
    // Styles
    //////////////////
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto",
    };

    return (
        <div style={div}>
            <h1>{post.piece}</h1>
            <h2>{post.details}</h2>
            <h2>{post.picture}</h2>
            <Link to="/">
                <button>Back to all my items</button>
            </Link>
        </div>
    );
};

export default SinglePost;