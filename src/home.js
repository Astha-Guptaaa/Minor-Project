import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { CiPercent } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { BsCart4} from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { IoIosCloseCircle } from "react-icons/io";
import Homeproduct from './homeproduct';
import "./home.css";

const Home = ({ detail,view,close,setClose,addtocart,wish}) => {
  const { loginWithRedirect,isAuthenticated} = useAuth0();
  return(
    <>
    {/* yaha se */}   {/*2hr:34min se dekhna 2hr:36min tak */}
{
      close ?
      <div className="product_detail">
        <div className="container">
          <button className="buttoncross" onClick={() => setClose(false)}><IoIosCloseCircle/></button>
          {
          detail.map((curElm) => {
            return (
              <div className="productbox">
                <div className="img-box">
                  <img src={curElm.Img} alt={curElm.Title} height={350} width={350}></img>
                </div>
                <div className="detail">
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <p></p>
                  <h3>Rs.{curElm.Price}</h3>
                  <button> {  
                             isAuthenticated ?
                             <li onClick={() => addtocart(curElm)}></li>
                             :
                             <li onClick={() => loginWithRedirect()}></li> 
                            }Add To Cart</button>
                </div>
              </div>
            );
          })}
          <div className="productbox"></div>
        </div>
      </div>: null
}
    <div className='top_banner'>
      <div className='container'>
        <div className='detail'>
          <h2>Fashion Collection For Women</h2>
         <pre> <Link to='/product' className='link'>SHOP NOW< FaArrowRight/></Link></pre>
        </div>
        <div className='img_box'>
          <img src='./img/dresses3.jpg' alt='img' height={460} width={600}></img>
        </div>
      </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/Tops.jpg' alt='Tops'></img>
          </div>
          <div className='detail'>
            <p>Top</p>
          </div>
        </div>

        <div className='box'>
          <div className='img_box'>
            <img src='./img/bottom.jpg' alt='bottom'></img>
          </div>
          <div className='detail'>
            <p>Bottoms</p>
          </div>
        </div>

        <div className='box'>
          <div className='img_box'>
            <img src='./img/western.jpg' alt='Western'></img>
          </div>
          <div className='detail'>
            <p>Western</p>
          </div>
        </div>

        <div className='box'>
          <div className='img_box'>
            <img src='./img/indian1.jpg' alt='indian'></img>
          </div>
          <div className='detail'>
            <p>Indian</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
           <BsTruck/>
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Order Above Rs. 1000</p>
          </div>
          </div>
          <div className='box'>
          <div className='icon'>
            <FaRupeeSign/>
          </div>
          <div className='detail'>
          <h3>Return and Refund</h3>
          <p>Money Back Guarantee</p>
          </div>
        </div>
          <div className='box'>
          <div className='icon'>
          <CiPercent />
          </div>
          <div className='detail'>
          <h3>Member Discount</h3>
          <p>On Every Order</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <FaHeadphones/>
          </div>
          <div className='detail'>
          <h3>Customer Support</h3>
          <p>24X7</p>
          </div>
        </div> 
      </div>
    </div>

    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm) =>
          {
            return(
            <div className='box' key={curElm.id}>
            <div className='img_box'>
              <img src={curElm.Img} alt={curElm.Title}></img>
              <div className='icon'>
              {
                              isAuthenticated ?
                              <li onClick={() => addtocart (curElm)}><BsCart4 /></li>
                              :
                              <li onClick={() => loginWithRedirect()}><BsCart4 /></li>
                            }
                
                <li onClick={() => view (curElm)}><FiEye /> </li>     {/*yaha par onclick vali line */}
                <li onClick={() => wish (curElm)}>< AiOutlineHeart/></li>
              </div>
            </div>
            <div className='detail'>
              <p>{curElm.Cat}</p>
              <h3>{curElm.Title}</h3>  
              <h4>Rs.{curElm.Price}</h4>
            
            </div>
           </div>
          )
          })
        }
        

      </div>
      </div>
      <div className='banner'>
        <div className='container'>

        <div className='detail'>
          <h4>LATEST COLLECTION OF</h4>
          <h3>*CROP TOPS*</h3>
          <h4>IN JUST </h4>
          <p>Rs. 399/</p>
          <Link to='/product' className='link'>SHOP NOW <FaArrowRight/></Link>
        </div>
        <div className='img_box'>
          <img src='./topsimg/crop top/cropTop12.jpg' alt='something went wrong'></img>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home;