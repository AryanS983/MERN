import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/Register'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Services from '../pages/Services'
import Error from '../pages/Error'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './App.css'
import AdminLayout from '../components/layouts/AdminLayout'
import AdminUsers from '../pages/AdminUsers'
import AdminContacts from '../pages/AdminContacts'
import AdminUpdate from '../pages/AdminUpdate'


function App() {
  

  return (
    <>
      <BrowserRouter>
        < Navbar />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/About' element={ <About/> } />
          <Route path='/Register' element={ <Register/> } />
          <Route path='/Contact' element={ <Contact/> } />
          <Route path='/Login' element={ <Login/> } />
          <Route path='/Services' element={ <Services/> } />
          <Route path='/Logout' element={ <Logout /> } ></Route>
          <Route path='*' element={<Error/>}/>
          <Route path='/Admin' element={<AdminLayout/>} >  {/* This is a nested route */}
            <Route path='Users' element={<AdminUsers/>} />
            <Route path='Contacts' element={<AdminContacts/>} />
            <Route path='Users/:id/edit' element={<AdminUpdate/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App    
