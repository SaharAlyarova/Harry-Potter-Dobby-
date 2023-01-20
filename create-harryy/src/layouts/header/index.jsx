import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import "./index.scss"
const Header = () => {
  return (
    <div style={{backgroundColor:"#5C5C5C", display:"flex", justifyContent:"space-between", alignItems:"center", maxWidth:"1300px",margin:"0 auto "}}>
       <NavLink to='/'><h1 style={{color:"white"}}>Movie App</h1></NavLink>
       {/* <UserOutlined style={{color:"white"}}/> */}
       <i class="fa-regular fa-user" style={{color:"white", fontSize:"30px", marginLeft:"30px"}}></i>
    </div>
  )
}

export default Header