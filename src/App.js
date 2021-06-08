import contacts from "./contacts.json";
import "./App.css";
import React, { Component } from "react";
class DisplayContacts extends Component {
  state = {
    contacts: [
      {
        name: "Idris Elba",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        popularity: 11.622713,
        id: "11731993-0604-4bee-80d5-67ad845d0a38",
      },
      {
        name: "Johnny Depp",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        popularity: 15.656534,
        id: "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
      },
      {
        name: "Monica Bellucci",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
        popularity: 16.096436,
        id: "0ad5e441-3084-47a1-9e9b-b917539bba71",
      },
      {
        name: "Gal Gadot",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
        popularity: 10.049256,
        id: "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
      },
      {
        name: "Ian McKellen",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
        popularity: 10.070132,
        id: "0067ae32-97b6-4431-898e-eb1c10150abb",
      },
    ],
  };

  AddRandomContact = () => {
    const contactsCopy = this.state.contacts;
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const randomAdded = contactsCopy.concat(randomContact);
    this.setState({
      contacts: randomAdded,
    });
    console.log(randomContact);
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.AddRandomContact}> Add Random Contact </button>
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
