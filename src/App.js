//Import all components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import Navbar from "./Navbar"

//Import react and hooks
import React, { useState, useEffect } from "react";

//Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px"
  };

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
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

  //const state to hold item edit
  const [targetItem, setTargetItem] = useState(nullItem);

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

  //get item
  const getTargetItem = (item) => {
    setTargetItem(item);
    props.history.push("/edit");
  };

  //Function to edit item on form submission
  const updateItem = async (item) => {
    const response = await fetch(url + item.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/jason",
      },
      body: JSON.stringify(item),
    });

    getItems();
  };

  //delete an item
  const deleteItem = async (item) => {
    const response = await fetch(url + item.id + "/", {
      method: "delete",
    });

    getItems();
    props.history.push("/");
  }

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
      <div className="App">
        <Navbar/>
        <h1 style={h1}>My Closet</h1>
        <Link to ="/new"><button style={button}>Create New Item</button></Link>
        <Switch>
          <Route
            exact 
            path="/"
            render={(routerProps) => <AllPosts posts={posts} {...routerProps} />}
          />
          <Route
            path="/post/:id"
            render={(routerProps) => (
              <SinglePost 
              {...routerProps} 
              posts={posts} 
              edit={getTargetItem}
              deleteItem={deleteItem}
              />
            )}
          />
          <Route
            path="/new"
            render={(routerProps) => (
            <Form 
              {...routerProps} 
              initialItem={nullItem}
              handleSubmit={addItems}
              buttonLabel="Create Item"
              />
            )}
          />
          <Route
            path="/edit"
            render={(routerProps) => (
              <Form 
              {...routerProps} 
              initialItem={targetItem}
              handleSubmit={updateItem}
              buttonLabel="update item"
              />
            )}
          />
        </Switch>
      </div>
    )
}

export default App;
