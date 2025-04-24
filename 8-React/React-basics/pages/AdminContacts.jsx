import React, { useEffect, useState } from 'react'
import { AuthCreate } from '../store/auth'
import { toast } from 'react-toastify'

function AdminContacts() {
  const {API} = AuthCreate()
  const {authToken} = AuthCreate()
  const [contact, setContact] = useState([])
  const getcontactdetails = async ()=>{
    try {
      const response = await fetch (API+"api/admin/contacts",{
        method: "GET",
        headers:{
          "Authorization": authToken
        }
      })
      const data = await response.json()
      if(response.ok){
        console.log(data);
        setContact(data)
      }
      

    } catch (error) {
      console.log('error');
    }
  }

  useEffect(()=>{
    getcontactdetails()
  },[])

  const deleteContact = async(id)=>{
    try {
      const response = await fetch(`${API}api/admin/contact/delete/${id}`,{
        method: "DELETE",
        headers: {
          "Authorization": authToken
        }
      })
      if(response.ok){
        toast.success("Message deleted")
        getcontactdetails()
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin Contacts Data</h1>
        <div className="container admin-users"style={{
                  display:'flex',
                  flexDirection:'column',
                  
                  }}>
          {contact.length>0? contact.map((curData, index)=>{
            return (
              
                <div key={index}>
                  <p>{curData.username}</p>
                  <p>{curData.email}</p>
                  <p style={{
                    maxHeight: "400px", // Set a maximum height
                    maxWidth: "400px",
                    overflowY: "auto",  // Enable vertical scrolling if content overflows
                    textWrap: "wrap"
                  }}>{curData.message}</p>
                  <button className='btn' onClick={()=>{deleteContact(curData._id)}}> delete </button>
                </div>
              
            )
          }): <>No users Found </>}
        </div>
      </section>
    </>
  )
}

export default AdminContacts