import React from "react";
import "./App.css";
import Header from "./Header.js";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Pablo",
      email: "pablo@esco.com",
    },
    {
      id: "2",
      name: "Juan",
      email: "juan@fgb.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
