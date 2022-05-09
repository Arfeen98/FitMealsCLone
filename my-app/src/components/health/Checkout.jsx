import React from 'react'
import "./checkout.css"
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <>
            <header className="page-header">
        <div id="container">
         <h1>Checkout</h1>
        </div>
    </header>

    <div id="inner-container-checkout">
        <div className="box">Returning customer?<Link to={"/login"}>Click here to login</Link></div>
        <div className="box">Have a coupon?<a href="">Click here to enter your code</a></div>
        <div>

            <p style={{
            fontSize: "40px",
            fontWeight: "900"
        }}>Billing Details</p>
            <div id="checkout_form">
            <form action="" id="myForm">

<div id="name-checkout">
   <div>
       {/* <label for="">First name <sup>*</sup></label>   */}
       <div className="inner">
       <label for="">First name <sup>*</sup></label> 
       <input type="text" style={{borderRadius: "30px",
padding: "18px",
border: "1px solid grey",
width:"230px"}}/>
       </div>
   </div>
   
   <div>
 
       <div className="inner">
       <label for="">Last name <sup>*</sup></label>
           <input type="text" style={{borderRadius: "30px",
padding: "18px",
border: "1px solid grey",
width:"230px"}}/>
       </div>
   </div>
</div>
   

   <div>
       <label for="">Country / Region <sup>*</sup></label>
       <select name="" id="" style={{width:"200px"}}>
           <option value="India">India</option>
       </select>
   </div>

   <div>
   <label for="">Town / City <sup>*</sup></label>
   <input type="text" style={{borderRadius: "30px",
padding: "18px",
width:"230px",
border: "1px solid grey"}}/>
   </div>

   <div>
   <label for="">State <sup>*</sup></label> 
   <select name="" id="selectOption" style={{width:"200px"}}>
       <option value="Telangana">Telangana</option>
       <option value="Tripura">Tripura</option>
       <option value="Uttarakhand">Uttarakhand</option>
       <option value="Odisha">Odisha</option>
       <option value="Rajasthan">Rajasthan</option>
       <option value="Nagaland">Nagaland</option>
       <option value="Punjab">Punjab</option>
       <option value="Manipur">Manipur</option>
       <option value="Maharashtra">Maharashtra</option>
       <option value="Meghalaya">Meghalaya</option>
       <option value="West-bengal">West Bengal</option>
   </select>
   </div>
   <div>
       <label for="">PIN <sup>*</sup></label>
       <input type="number" style={{borderRadius: "30px",
padding: "18px",
border: "1px solid grey"}}/>
   </div>
   <div>
       <label for="">Phone <sup>*</sup></label>
       <input type="number" style={{borderRadius: "30px",
padding: "18px",
border: "1px solid grey"}}/>
   </div>
   <div>
       <label for="">Email address <sup>*</sup></label>
       <input type="email" style={{borderRadius: "30px",
padding: "18px",
width:"230px",
border: "1px solid grey"}}/>
   </div>

   <Link to="/registration" style={{fontSize:"16px"}} >Create an account?</Link>

  <div style={{marginLeft:"-250%"}}>
  <a href="payment.html">​<button className="Chkbtn">Place Order</button></a>
  </div>
  
</form>
            </div>
            {/* <a href="payment.html">​<button className="Chkbtn">Place Order</button></a> */}
        </div>
    </div>
    
    </>
  )
}

export default Checkout