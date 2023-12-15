import "./User.css";
import RegularUser from "./RegularUser";
import PowerUser from "./PowerUser";

function User(props) {
  const { item } = props; // object destructuring for accessing the data sent by the "UserList" parent component

  //pass data to RegularUser/PowerUser component through props (named "item" in this case)
  return (
    <div className="user">
      {item.type === "regular-user" ? (
        <RegularUser item={item} />
      ) : (
        <PowerUser item={item} />
      )}
    </div>
  );
}

export default User;
