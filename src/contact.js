import React, { useState } from "react";
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";
const Contact =()=>{
    const { loginWithRedirect,logout ,user ,isAuthenticated} = useAuth0();
    const [users,setUser]= useState(
        {
            Name:'',Email:'',Subject:'',Message:''
        }
    )
    let name,value
    const data=(e)=>
    {
       name= e.target.name;
       value= e.target.value;
       setUser({...users,[name]:value})
    }
    const senddata = async(e) =>
    {
      const{  Name,Email,Subject,Message} = users
      e.preventDefault();
      const option = {
        method:'POST',
        headers: {
            'Content-Type' :  'application/json'
        },
        body: JSON.stringify({
            Name,Email,Subject,Message
        })
      }
      const res = await fetch('https://e-commerce-contact-a58f1-default-rtdb.firebaseio.com/Message.json',option)
      console.log(res)
      if(res){
        alert("Message sent")
      }
      else{
        alert("Error")
      }
    }
    return(
        <div className="contact_container">
            <div className="content">
                <h2>Contact us</h2>
                <div className="form">
                    <form method="POST">
                        <input type="text" name="Name" value={users.Name} placeholder="Enter Your Full Name" required autoComplete="off" onChange={data}></input>
                        <input type="email" name="Email" value={users.Email} placeholder="Enter Your E-mail" required autoComplete="off" onChange={data}></input>
                        <input type="text" name="Subject" value={users.Subject} placeholder="Enter Your Subject" required autoComplete="off" onChange={data}></input>
                       <textarea name="Message" value={users.Message} placeholder="Your Message" required autoComplete="off" onChange={data}> </textarea>
                       {
                        isAuthenticated ?
                        <button type="submit" onClick={senddata}>Send</button>
                        : <button type="submit" onClick={() => loginWithRedirect()} title="Login to send a message">Login</button>
                       }
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Contact;