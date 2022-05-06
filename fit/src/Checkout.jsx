import React from 'react'
import "./checkout.css"

function Checkout() {
  return (
    <>
            <header className="page-header">
        <div id="container">
         <h1>Checkout</h1>
        </div>
    </header>

    <div id="inner-container">
        <div className="box">Returning customer?<a href="">Click here to login</a></div>
        <div className="box">Have a coupon?<a href="">Click here to enter your code</a></div>
        <div>

            <p>Billing Details</p>
            <form action="" id="myForm">

             <div id="name">
                <div>
                    <label for="">First name <sup>*</sup></label>
                    <div className="inner">
                    <input type="text"/>
                    </div>
                </div>
                
                <div>
                    <label for="">Last name <sup>*</sup></label>
                    <div className="inner">
                        <input type="text"/>
                    </div>
                </div>
             </div>
                

                <div>
                    <label for="">Country / Region <sup>*</sup></label>
                    <select name="" id="">
                        <option value="India">India</option>
                    </select>
                </div>

                <div>
                <label for="">Town / City <sup>*</sup></label>
                <input type="text"/>
                </div>

                <div>
                <label for="">State <sup>*</sup></label>
                <select name="" id="selectOption">
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
                </select>
                </div>
                <div>
                    <label for="">PIN <sup>*</sup></label>
                    <input type="number"/>
                </div>
                <div>
                    <label for="">Phone <sup>*</sup></label>
                    <input type="number"/>
                </div>
                <div>
                    <label for="">Email address <sup>*</sup></label>
                    <input type="email"/>
                </div>

                <a href="sign.html">Create an account?</a>
               
            </form>
            <a href="payment.html">​<button className="Chkbtn">Place Order</button></a>
        </div>
    </div>
    
    </>
  )
}

export default Checkout