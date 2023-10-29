import React from "react";
import Table from "../../components/Table";
import UserData from "../../JSON/users.json";
const Dashboard = (props) => {
  console.log(props, "Props");
  const {type} =props.userDetails
  const filteredUsers = UserData.users.filter((user) => user.type === type);
  return (
    <div className="container">
      <h2 className="text-left w-100">{type.toLowerCase() === "customer" ? " Customer View" : "Attendant View"}:</h2>
      <Table data={filteredUsers} currentUserData={props && props.userDetails}>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Action</th>
      </Table>
    </div>
  );
};

export default Dashboard;
