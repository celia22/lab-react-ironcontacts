import contacts from "./contacts.json";
import "./App.css";
import React, { Component } from "react";

const fiveFirsts = contacts.slice(0, 5);

class DisplayContacts extends Component {
  render() {
    return (
      <div>
        <table className="table_container">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {fiveFirsts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img
                      className="table_images"
                      src={contact.pictureUrl}
                      alt="contact_picture"
                    />
                  </td>
                  <td> {contact.name}</td>
                  <td> {contact.popularity.toFixed(2)}</td>
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
