import React from "react";
import Table from "../../components/Table";
import UserData from "../../JSON/users.json";
const Dashboard = (props) => {
  console.log(props, "Props");
  const {type} =props.userDetails
  const filteredUsers = UserData.users.filter((user) => user.type === type);
  return (
    <div className="container">
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
