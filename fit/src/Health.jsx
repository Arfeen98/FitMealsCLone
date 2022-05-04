import React from 'react'
import "../src/health.css"

function Health() {
  return (
    <>
      <div className="prathmeshcontainer">
        <div className="nav">
            <div className="logo">
                <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-white.png" alt="" style={{height:"50px;"}}/>
            
              
            </div>
            <div className="others">
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass fa-2x" style={{color: "rgb(238, 239, 240)"}}/>
                   
                </div>
                <div className="sign">
                        <i className="fa-solid fa-circle-user fa-2x" style={{color: "rgb(238, 239, 240)"}}/>

                </div>
                <div className="cart">
                 
                    <i className="fa-solid fa-cart-arrow-down fa-2x" style={{color: "rgb(238, 239, 240)"}}/>
                </div>
            </div>

        </div>

        <div className="image">

        </div>
    </div>


    <div className="features">
        <div className="health">
           
            <center> <i className="fa-solid fa-hand-holding-medical fa-4x" style={{color:"aliceblue"}}></i></center>
       
            <p>Overall Health Focus</p>
        </div>

      
        <div className="clipboard">
            <center> <i className="fa-solid fa-clipboard fa-4x" style={{color: "aliceblue"}}></i></center>
           
            <p>Customized Diet Plan</p>
        </div>
        <div className="apple">
            <center><i className="fa-solid fa-apple-whole fa-4x" style={{color: "aliceblue"}}></i></center>
            
            <p>Easy Healthy Recipies</p>
        </div>
        <div className="workout">
            <center><i className="fa-solid fa-dumbbell fa-4x" style={{color: "aliceblue"}}></i></center>
            
            <p>Workout Plans</p>
        </div>
        <div>
            <center> <i className="fa-solid fa-child fa-4x" style={{color: "aliceblue;"}}></i></center>
           
            <p>Body Transformation</p>
        </div>
        <div className="cont">
            <center>  <i className="fa-solid fa-phone-volume fa-4x" style={{color: "aliceblue;"}}></i></center>
          
            <p>Weekly Consultation</p>
        </div>

    </div>
    </>
  )
}

export default Health