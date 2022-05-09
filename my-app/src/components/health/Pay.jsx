import React from 'react'
import "./pay.css"
import {useState} from 'react'
function Pay() {
  const [debit,setDebit]=useState(false)
  const [otp,setOtp]=useState(false)
  const [error,setError]=useState(true)
  const[cvv,setCvv]=useState(0)
  const[cod,setCod]=useState(false)

  const payment=(e)=>{
    e.preventDefault();

   setOtp(!otp)

   if(cvv.length!=3){
     setError(true)
   }
   else{
     setError(false)
   }
  }
  var count=0;
  const arfeenChange=(e)=>{
    count++
    console.log(count);
      if(count==16){
        setError(false)
      }
      else{
        setError(true)
        
      }
  }

  const checkCvv=(e)=>{
    setCvv(e.target.value)
    

  }

  const handleChange=(e)=>{
    console.log(e.target.year)

  }
  return (
   <>
    <div id="background">
      
    </div>
    <h1 className='img_over'>Payment</h1>


    <div style={{width:"40%", margin:"auto",lineHeight:"48px", height:"auto", marginTop:"50px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", paddingBottom:"25px" }}>
          <form action="">
          <input  type="checkbox" onChange={()=>setCod(!cod)} />
          <label htmlFor="">Cash On Delevery</label> <br />
          <input  type="checkbox"  onChange={()=>setDebit(!debit)} />
          <label htmlFor=""> Debit Card/ Credit Card</label>
          </form>
   
    <div>
     {debit ? <div style={{margin:"auto"}}>
      <form  onSubmit={payment}>
        <label htmlFor="">Card  Number:</label>  <br />
        <input className='arfeen_class' type="number"  onChange={(e)=>arfeenChange(e)}/> <br />
        <label htmlFor="">Valid thru</label> <br />
        <input className='arfeen_class' type="month" onChange={(e)=>handleChange(e)}/> <br />
        <label htmlFor="">CVV</label> <br />
        <input style={{width:"180px",borderRadius:"15px",height:"40px", border:"1px solid black"}} className='arfeen_class' type="text" onChange={(e)=>checkCvv(e)}/> <br />
        <input  className="bhushan_button"  type="Submit"  value="Pay"/>
      </form>
    </div> : "" }
     
      {(otp && !error)  ?     <div>
      <form action="" onSubmit={()=>{alert("Payment Successfull"); setOtp(false)}}>
        <label htmlFor="">One Time Password</label> <br />
        <input className='arfeen_class' type="text" style={{width:"180px",borderRadius:"15px",height:"40px", border:"1px solid black"}}/> <br />
        <input className='bhushan_button' type="Submit" value={"Confirm"}/>
      </form>
    </div> : ""}
    </div>
   
{cod ?<div><button onClick={()=>alert("Order Sucessful")} className="bhushan_button1">For Confirmation Click Here</button></div> :" "}
</div>






   </>
  )
}

export default Pay