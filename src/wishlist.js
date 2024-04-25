import React from 'react';
import {IoClose} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './wishlist.css'
const Wishlist = ({wishlist,setWishlist,addtocart}) => {
const { loginWithRedirect,isAuthenticated} = useAuth0();
  
//remove cart product
const removeproduct = (product) =>
{
    const exsit = wishlist.find((x) =>
    {
        return x.id === product.id
    })
    if(exsit.qty > 0)
    {
        setWishlist(wishlist.filter((x) =>
    {
        return x.id !== product.id
    }))
    } 
}


  return (
    <>
    {/* 2hr:36min to 2hr:49min */}
    <div className='cartcontainer'>
        {wishlist.length === 0 && 
        <div className='emptycart'>
        <h2 className='empty'>Wishlist is empty</h2>
        <Link to='/product' className='emptycartbtn'>ADD ITEM</Link>
        </div>
        }
        <div className='contant'>
            {
                wishlist.map((curElm)=>
            {
            return(
                <div className='cart_item' key={curElm.id}>
                    <div className='img_box'>
                        <img src={curElm.Img} alt={curElm.Title}></img>
                    </div>
                    <div className='detail'>
                        <div className='info'>
                        <h4>{curElm.Cat}</h4>
                        <h3>{curElm.Title}</h3>
                        <p> Price: Rs.{curElm.Price}</p>
                        <button> {  
                             isAuthenticated ?
                             <li onClick={() => addtocart(curElm)}></li>
                             :
                             <li onClick={() => loginWithRedirect()}></li> 
                            }Add To Cart</button>
                        </div>
                        <div className='close'>
                        <button onClick={() => removeproduct(curElm)}><IoClose /></button>
                        </div>
                    </div>
                    
                </div>
             )
        })
    }
    </div>
   
    </div>
    </>
  )
}

export default Wishlist;