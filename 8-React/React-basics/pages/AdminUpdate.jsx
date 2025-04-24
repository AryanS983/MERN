import React, { useEffect, useState } from "react";
import { AuthCreate } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AdminUpdate() {
  
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: ""
  })  
  
  const params = useParams()
  const {authToken} = AuthCreate()
  const handleInput = (e)=>{
    let name = e.target.name
    let value = e.target.value

    setData({
        ...data,
        [name]: value
    })
  }

  const getsingleUserData = async()=>{
    const response = await fetch(`${API}api/admin/user/${params.id}`,{
        method: "GET",
        headers:{
            "Authorization": authToken
        }
    })
    const data = await response.json()
    setData({
        username: data.username,
        email: data.email,
        phone: data.phone
    })
    console.log(data);
  }

  useEffect(()=>{
    getsingleUserData()
  },[])

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
        const response = await fetch(`${API}api/admin/user/update/${params.id}`,{
            method: "PATCH",
            headers:{
                "Authorization": authToken,
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        
        
        if(response.ok){
            const data = await response.json()
            toast.success("Data updated successfully")
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }

  }
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update User</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        </div>

      </section>
    </>
  );
}

export default AdminUpdate;
