import React, { useState, useEffect } from "react";

const initialFormState = {
  fullName: "",
  phoneNumber: "",
};

const Form = ({ contacts, setContacts }) => {
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    setForm(initialFormState);
  }, [contacts]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      alert("Please fill out all fields");
      return false;
    }

    setContacts([...contacts, form]);
  };

  return (
    <div>
      <h3>Enter Your Contact Informations</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={form.fullName}
            onChange={handleChange}
            type="text"
            name="fullName"
            placeholder="Full Name"
          />
        </div>
        <div>
          <input
            value={form.phoneNumber}
            onChange={handleChange}
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
