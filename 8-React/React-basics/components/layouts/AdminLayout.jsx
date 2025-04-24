import React from 'react'
import { Navigate, NavLink,Outlet } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { AuthCreate } from '../../store/auth';

function AdminLayout() {
  const {user} = AuthCreate()
  if(user && !user.isAdmin){
    return <Navigate to="/" />
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li> <NavLink to="/Admin/Users"> <FaUser /> Users </NavLink> </li>
              <li> <NavLink to="/Admin/Contacts"> <BiSolidContact /> Contacts </NavLink> </li>
              <li> <NavLink to="/Admin/Services"> <MdHomeRepairService/> Services </NavLink> </li>
              <li> <NavLink to="/"> <IoHomeSharp/> Home </NavLink> </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet/>
      {/* When woking with nested routes use Outlet tag or else the routes will not be displayed */}
    </>
  )
}

export default AdminLayout