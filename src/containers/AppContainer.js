import React, { Component } from "react";
import App from "../components/App";
import serialize from "form-serialize";

class AppContainer extends Component {
  constructor() {
    super();

    // Initialize users in state as an empty array and
    // set isFetching to false.
    this.state = {
      users: [],
      isFetching: false,
      error: null
    };
  }

  componentDidMount() {
    // Before performing the fetch, set isFetching to true
    this.setState({ isFetching: true });

    // After component mounts, call the API to get the
    // users, then update state which triggers re-render.
    // Add a delay to the URL and reset isFetching upon
    // completion of the request.
    fetch("https://reqres.in/api/users?delay=1")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  onDeleteUser = e => {
    e.preventDefault();
    const id = e.target.id;
    const url = `https://reqres.in/api/users/${id}`;

    const options = {
      method: "DELETE"
    };

    this.setState({ isFetching: true });

    fetch(url, options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const newUsers = this.state.users.filter(user => user.id != id);
        this.setState({
          users: newUsers,
          isFetching: false
        });
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  onAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, { hash: true });

    // Create headers to set the content type to json
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // Set options, and stringify the body to JSON
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(body)
    };

    // Before performing the fetch, set isFetching to true
    this.setState({ isFetching: true });

    fetch("https://reqres.in/api/users", options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users, json]
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };


  onEditForm = e => {
    let id  = e.target.id;
    id = id.substring(4);
    console.log("ID is "+id);
    let user = this.state.users.find(user=>{
      return user.id == id
    });

    let editingUser = Object.assign(user);
    console.log("editingUser");
    console.log(editingUser);
    this.setState({editingUser:editingUser});
  };


  onEditUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, { hash: true });

    // Create headers to set the content type to json
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // Set options, and stringify the body to JSON
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(body)
    };

    // Before performing the fetch, set isFetching to true
    this.setState({ isFetching: true });

    fetch("https://reqres.in/api/users", options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users, json]
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };



  render() {
    return (
      <App
        onAddUser={this.onAddUser}
        onDeleteUser={this.onDeleteUser}
        onEditForm={this.onEditForm}
        {...this.state}

      />
    );
  }
}

export default AppContainer;
