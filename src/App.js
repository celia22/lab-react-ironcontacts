import contacts from "./contacts.json";
import "./App.css";
import React, { Component } from "react";
class DisplayContacts extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  AddRandomContact = () => {
    const contactsCopy = [...this.state.contacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const randomAdded = contactsCopy.concat(randomContact);
    this.setState({
      contacts: randomAdded,
    });
  };

  SortByName = () => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: contactsCopy,
    });
  };

  SortByPopularity = () => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      contacts: contactsCopy,
    });
  };

  deleteContact = () => {
    const contactsCopy = [...this.state.contacts];
    const movieIndex = contactsCopy.findIndex((item) => item.id);
    contactsCopy.splice(movieIndex, 1);

    this.setState({
      contacts: contactsCopy,
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.AddRandomContact}> Add Random Contact </button>
        </div>

        <div>
          <button onClick={this.SortByName}> Sort by name </button>
        </div>

        <div>
          <button onClick={this.SortByPopularity}> Sort by popularity</button>
        </div>

        <table className="table_container">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      className="table_images"
                      src={contact.pictureUrl}
                      alt="contact_picture"
                    />
                  </td>
                  <td> {contact.name}</td>
                  <td> {contact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={this.deleteContact}> Delete </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <DisplayContacts />
    </div>
  );
}

export default App;
