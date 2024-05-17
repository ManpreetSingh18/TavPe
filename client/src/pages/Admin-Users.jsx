import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from 'react-router-dom';

export const AdminUsers = () => {
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]); // Initialize users state with an empty array

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data); // Update users state with fetched data
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user on delete button
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {users &&
                users.map((curUser, index) => {
                  // Check if users is truthy before mapping
                  return (
                    <tr key={index}>
                      <td>{curUser.username}</td>
                      <td>{curUser.email}</td>
                      <td>{curUser.phone}</td>
                      <td className="changeColor">
                        <Link to={`/admin/users/${curUser._id}/edit`} style={{ color: '#800020'}}>
                          Edit
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button onClick={() => deleteUser(curUser._id)}>
                          Delete
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
