import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./Contacts.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullName: "John Doe",
      phoneNumber: "111",
    },
    {
      fullName: "Jane Doe",
      phoneNumber: "222",
    },
    {
      fullName: "Joe Doe",
      phoneNumber: "3333",
    },
    {
      fullName: "Jill Doe",
      phoneNumber: "4444",
    },
    {
      fullName: "Jack Doe",
      phoneNumber: "5555",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default Contacts;
