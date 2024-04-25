import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo2.png' alt='logo' height={50} width={85}></img>
                </div>
                <div className='detail'>
                    <p>Keep in touch!</p>
                    <div className='icon'>
                    <li><FaFacebookF/></li>
                    <li><FaInstagram/></li>
                    <li><FaTwitter/></li>
                    <li><FaYoutube/></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Term & Condition</li>
                </ul>
              
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer