import React, { useEffect } from 'react'
import { AuthCreate } from '../store/auth'
import { Navigate } from 'react-router-dom'


function Logout() {
  const {logoutUser} = AuthCreate()
  useEffect(()=>{
    logoutUser()
  },[logoutUser])

  return (
    <Navigate to={"/Login"}></Navigate>
  )
}

export default Logout