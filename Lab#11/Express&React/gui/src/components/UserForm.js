import { useState } from "react";
import "./UserForm.css";

function UserForm(props) {
  const { onAdd } = props;
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [type, setType] = useState("");

  const options = [
    {
      label: "regular",
      value: "regular-user",
    },
    {
      label: "power",
      value: "power-user",
    },
  ];

  const addUser = (evt) => {
    console.warn("called");

    // pass data from child component to parent component (UserList) by calling
    // the method sent by the parent component through props, but with data
    // the UserList will use the data sent from here {username,fullName,type} for posting it to the server
    onAdd({
      username,
      fullName,
      type,
    });
  };

  return (
    <div className="user-form">
      <div className="username">
        <input
          type="text"
          placeholder="username"
          onChange={(evt) => setUsername(evt.target.value)}
        />
      </div>
      <div className="fullName">
        <input
          type="text"
          placeholder="fullName"
          onChange={(evt) => setFullName(evt.target.value)}
        />
      </div>
      <div className="type">
        <select onChange={(evt) => setType(evt.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="add">
        <input type="button" value="add" onClick={addUser} />
      </div>
    </div>
  );
}

export default UserForm;
