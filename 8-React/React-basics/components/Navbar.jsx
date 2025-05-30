import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { AuthCreate } from '../store/auth';


export const Navbar = () => {
  const { isLoggedin } = AuthCreate()
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Digital Solutions</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/About"> About </NavLink>
              </li>
              <li>
                <NavLink to="/Services"> Services </NavLink>
              </li>
              <li>
                <NavLink to="/Contact"> Contact </NavLink>
              </li>
              {isLoggedin? (
                <li>
                  <NavLink to={"/Logout"}>Logout</NavLink>
                </li>
              ):(
                <>
                  <li>
                    <NavLink to="/Register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Login"> Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar