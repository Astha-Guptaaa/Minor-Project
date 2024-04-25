import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
import Cart from './cart'
import Wishlist from './wishlist'
import Contact from './contact'

const Rout = ({product,setProduct,detail,view, close,setClose,cart,setCart,addtocart, wishlist, setWishlist, wish}) => {
  return (
    <><Routes>
      <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} wish={wish} />}/>
      <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}  addtocart={addtocart} wish={wish}/>}/>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
      <Route path='/wishlist' element={< Wishlist wishlist={wishlist} setWishlist={setWishlist} wish={wish} addtocart={addtocart}/>}/>
      <Route path='/contact' element={< Contact/>}/>
     
      </Routes>
      </>
  )
}

export default Rout;