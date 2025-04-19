import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function Register() {
  const [User, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()
//   Task	                 Code
// Object → JSON	    JSON.stringify(object)
// JSON → Object	    JSON.parse(jsonString)

  const handleInput = (e)=>{
    const name= e.target.name
    const val = e.target.value
    setUser({
      ...User,
      [name]:val    // dynamic value allocation inside an object is done using [ ]
    })
  }
  // Ex:-
    // const key = "name";
    // const value = "Aryan";

    // const obj = {
    //   [key]: value
    // };
    // console.log(obj); // 👉 { name: "Aryan" }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(User);
    try {
      const response = await fetch("http://localhost:3000/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(User)
      })
      const data = await response.json()
      console.log(response);
      console.log(data);
      if(response.ok){
        setUser({
          username: "",
          phone: "",
          email: "",
          password: "",
        })
        navigate("/login")
      }else if (response.status == 400){
        alert(data.extradetails ? data.extradetails : data.msg)   // reference auth-controller.js
      }

      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={User.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={User.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={User.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={User.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
