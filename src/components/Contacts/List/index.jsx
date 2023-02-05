import React, { useState } from "react";

const List = ({ contacts }) => {
  const [filteredText, setFilteredText] = useState("");

  const handleFilteredText = (e) => {
    setFilteredText(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
    return Object.keys(contact).some((key) => {
      return contact[key]
        .toString()
        .toLowerCase()
        .includes(filteredText.toLowerCase());
    });
  });

  console.log(filteredContacts);

  return (
    <div>
      <input
        onChange={handleFilteredText}
        value={filteredText}
        type="text"
        placeholder="Filter Contacts"
      />

      <ul className="list">
        {filteredContacts.map((contact, index) => {
          return (
            <li key={index}>
              <span>{contact.fullName}</span>
              <span>{contact.phoneNumber}</span>
            </li>
          );
        })}
      </ul>

      <p id="totalContacts">TOTAL CONTACTS ({filteredContacts.length})</p>
    </div>
  );
};

export default List;
