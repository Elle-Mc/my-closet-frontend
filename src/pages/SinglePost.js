import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ posts, match, edit, deleteItem }) => {
    const id = parseInt(match.params.id); 
    const post = posts.find((post) => post.id === id);

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
            <button onClick={(event) => edit(post)}>Edit</button>
            <button onClick={(event) => deleteItem(post)}>Delete</button>
            <Link to="/">
                <button>Back to all my items</button>
            </Link>
        </div>
    );
};

export default SinglePost;