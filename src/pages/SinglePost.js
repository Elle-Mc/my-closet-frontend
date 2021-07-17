import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const SinglePost = ({ posts, match, edit, deleteItem, history }) => {
    const id = parseInt(match.params.id); //gets the ID from the URL param
    const post = posts.find((post) => {
      return post.id === id
    });
    
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
            <img src={post.image} alt={post.name} />
            <button onClick={(event) => edit(post)}>Edit</button>
            <button onClick={(event) => deleteItem(post)}>Delete</button>
            <Link to="/">
                <button>Back to all my items</button>
            </Link>
        </div>
    );
};

export default SinglePost;