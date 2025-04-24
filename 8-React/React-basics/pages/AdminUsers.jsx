import React, { useState } from "react";
import { useEffect } from "react";
import { AuthCreate } from "../store/auth";
import { Link } from "react-router-dom";

function AdminUsers() {
  const {API} = AuthCreate()
  const [user, setUser] = useState([]);
  const { authToken } = AuthCreate();
  const getallusers = async () => {
    const response = await fetch(API+"api/admin/users", {
      method: "GET",
      headers: {
        Authorization: authToken,
      },
    });
    const data = await response.json();
    setUser(data);
    console.log(data);
  };
  

  const deleteuser = async (id)=>{
    const response = await fetch(`${API}api/admin/user/delete/${id}`,{
      method:"DELETE",
      headers:{
        "Authorization": authToken
      }
    })
    const data = response.json()
    console.log(data);
  }

  useEffect(() => {
    getallusers();
  }, [deleteuser]);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin User Data</h1>
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
              {user.length > 0 ? (
                user.map((cur, ind) => {
                  return (
                    <tr key={ind}>
                      <th>{cur.username}</th>
                      <th>{cur.email}</th>
                      <th>{cur.phone}</th>
                      <th> <Link to={`/Admin/Users/${cur._id}/edit`} >Edit</Link> </th>
                      <th><button onClick={()=>{deleteuser(cur._id)}}>Delete</button></th>
                    </tr>
                  );
                })
              ) : (
                  <tr>
                    <th>No Users to display</th>
                  </tr> 
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminUsers;
