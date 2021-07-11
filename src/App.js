//Import all components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form"

//Import react and hooks
import React, { useState, useEffect } from "react";

//Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App() {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px"
  };

  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://my-closet-emc.herokuapp.com/items/";

  // State to Hold The List of Posts
  const [posts, setPosts] = useState([]);

  //object for a null item
  const nullItem = {
    piece: "",
    details: "",
    picture: "",
  };

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  };

  //////////////
  // Functions
  //////////////
  const getItems = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  }

  //Adding item from the form data
  const addItems = async (newItem) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    getItems();
  };

  //////////////
  // useEffects
  //////////////
  useEffect(() => {
    getItems();
  }, []);

  /////////////////////
  // returned JSX
  /////////////////////
    return (
      <div>
        <h1 style={h1}>My Closet</h1>
        <Link to ="/new"><button style={button}>Create New Item</button></Link>
        <Switch>
          <Route
            exact 
            path="/"
            render={(routerProps) => <AllPosts {...routerProps} posts={posts} />}
          />
          <Route
            path="/post/:id"
            render={(routerProps) => (
              <SinglePost {...routerProps} posts={posts} />
            )}
          />
          <Route
            path="/new"
            render={(routerProps) => <Form 
              {...routerProps} 
              initialItem={nullItem}
              handleSubmit={addItems}
              buttonLabel="Create Item"
            />}
          />
          <Route
            path="/edit"
            render={(routerProps) => <Form {...routerProps} />}
          />
        </Switch>
      </div>
    )
}

export default App;
