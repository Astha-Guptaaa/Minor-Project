import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from "./productdetail";
import { IoIosCloseCircle } from "react-icons/io";
import "./product.css";
const Product = ({ product, setProduct, detail,view,close,setClose, addtocart,wish}) => {
  const { loginWithRedirect,isAuthenticated} = useAuth0();
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(Productdetail);
  };
  return (
    <>
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
                  
                  <button className="addtocartbtn"> {  
                             isAuthenticated ?
                             <li onClick={() => addtocart(curElm)}></li>
                             :
                             <li onClick={() => loginWithRedirect()}></li> 
                            }Add To Cart</button>
                </div>
              </div>
            )
          })}
          <div className="productbox"></div>
        </div>
      </div>: null
}
      <div className="products">
        <h2> Products</h2>
        <p>Home . Product</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Top")}>Top</li>
                <li onClick={() => filtterproduct("Western")}>Western</li>
                <li onClick={() => filtterproduct("Bottom")}>Bottom</li>
                <li onClick={() => filtterproduct("Indian")}>Indian</li>
              </ul>
            </div>
            <div className="productbox">
              <div className="content">
                {product.map((curElm) => {
                  return (
                    <>
                      <div className="box" key={curElm.id}>
                        <div className="img_box">
                          <img src={curElm.Img} alt={curElm.Title}></img>
                          <div className="icon">
                            {
                              isAuthenticated ?
                              <li onClick={() => addtocart (curElm)}><BsCart4 /></li>
                              :
                              <li onClick={() => loginWithRedirect()}><BsCart4 /></li>
                            }
                            
                            <li onClick={() => view (curElm)}><FiEye /></li>
                            <li onClick={() => wish (curElm)}><AiOutlineHeart /></li>
                          </div>
                        </div>
                        <div className="detail">
                          <p>{curElm.Cat}</p>
                          <h3>{curElm.Title}</h3>
                          <h4>Rs.{curElm.Price}</h4>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
