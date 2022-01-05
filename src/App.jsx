import Header from "./components/Header";

import initialEmails from "./data/emails";

import "./App.css";
import { useState } from "react";

function App() {
  const [emails, setEmails] = useState(initialEmails);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label"> Inbox </span>{" "}
            <span className="count"> ? </span>{" "}
          </li>{" "}
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label"> Starred </span>{" "}
            <span className="count"> ? </span>{" "}
          </li>
          <li className="item toggle">
            <label for="hide-read"> Hide read </label>{" "}
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
      <main className="emails">
        {emails.map((email) => {
          return (
            <section key={email.id} className="single-email">
              <input
                type="checkbox"
                onChange={() => toggleRead(email)}
                checked={email.read}
                name=""
                id=""
              />
              <input
                type="checkbox"
                onChange={() => toggleStar(email)}
                checked={email.starred}
                name=""
                className="star"
              />
              <span className="sender">{email.sender}</span>
              <span className="title">{email.title}</span>
            </section>
          );
        })}
      </main>{" "}
    </div>
  );
}

export default App;
