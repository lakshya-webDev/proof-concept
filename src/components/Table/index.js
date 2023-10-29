import React from "react";
import "./table.css";
import Button from "../Button";

const Table = ({ children, data, currentUserData }) => {
  return (
    <table className="rwd-table w-100">
      <thead>
        <tr>{children}</tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index} className={userMatchesCurrentUser(user, currentUserData) ? "active-user" : ""}>
            <td>{userMatchesCurrentUser(user, currentUserData) ? "You": user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <div className="flex item-center">
                <Button className="btn action-btn" text="View" />
                <Button className="btn action-btn" text="Verify" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const userMatchesCurrentUser = (user, currentUserData) => {
    console.log(user,currentUserData,"Current User")
  return user.email === currentUserData.email;
};

export default Table;
