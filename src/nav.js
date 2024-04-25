import React, { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css";
const Nav = ({searchbtn}) => {
  const[search, setSearch]= useState()
  const { loginWithRedirect,logout ,user ,isAuthenticated} = useAuth0();
  
  return (
    <>
      <div className="free">
        <div class="icon">
          <CiDeliveryTruck />
        </div>

        <p>FREE Shipping When Shopping Upto Rs.1000</p>
      </div>
      <div className="main_header">
        <div className="container">
          <div className="logo">
            <img src="./img/logo2.png" alt="logo" height={40} width={90}></img>
          </div>
          <div className="search_box">
            <input
              type="text"
              value={search}
              placeholder="Search For Products"
              autoComplete="off" onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button onClick={() =>searchbtn (search)}>Search</button>
          </div>
          <div className="icon">
            {
              isAuthenticated &&
              (
                <div className="account">
                <div className="user_icon">
                  <FaRegUserCircle />
                </div>
                <p>Hello,{user.name}</p>
              </div>
              )
            }
          
            <div className="second_icon">
              <Link to="/wishlist" className="link">
                <FaRegHeart />
              </Link>
              <Link to="/cart" className="link">
                <BsCart4 />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="nav">
          <ul>
            <li>
              <Link to='/' className="link">Home</Link>
            </li>
            <li>
              <Link to='/product'className="link"> Product</Link>
            </li>
            <li>
              <Link to='/about'className="link">About</Link>
            </li>
            <li>
              <Link to='/contact' className="link">Contact</Link>
            </li>
          </ul>
          </div>
          <div className="auth">
            {
              isAuthenticated ?
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <span className="log">LogOut</span> <RiLogoutCircleLine/></button> 
              :
              <button onClick={() => loginWithRedirect()}> <span className="log">LogIn </span><RiLoginCircleLine/></button> 

            }
          </div>
        </div>

      </div>
    </>
  );
};

export default Nav;
