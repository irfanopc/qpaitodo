import React from 'react'
import './Navbar.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navbar() {

  
  const navigator = useNavigate()
  const handleLogout =  () => {
    axios.get('http://localhost:5000/signout')
      .then((data)=> {
        localStorage.removeItem('email')
        localStorage.removeItem('id')
         alert(data.data.massage);
        navigator("/");
      })
      .catch((error)=>{
        console.log(error);
      })
  
    
  }
  return (
    <div className='nav'>
     <button onClick={handleLogout}>logout</button>    
    </div>
  )
}

export default Navbar