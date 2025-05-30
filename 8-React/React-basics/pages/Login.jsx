import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCreate } from "../store/auth";
import { toast } from "react-toastify";

function Login() {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const {API} = AuthCreate()
  const handleInput = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setUser({
      ...User,
      [name]: val,
    });
  };

  const {storeJWT} = AuthCreate()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API+"api/auth/login",{
        method:"POST",
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(User)
      })
      console.log(response);
      const data = await response.json()
      if(response.ok){
        setUser({
          email: "",
          password: "",
        })
        storeJWT(data.token)
        console.log(data);
        toast.success("Login Successful")
        navigate("/")
      }else if (response.status == 400){
        toast.error(data.extradetails ? data.extradetails : data.msg)   // reference auth-controller.js
      }
      
    } catch (error) {
      console.log(error);
    }
  };

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
                  height="400"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
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

export default Login;
