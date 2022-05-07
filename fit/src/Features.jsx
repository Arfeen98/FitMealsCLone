import React from 'react'
import "./health.css"

function Features() {
  return (
    <>
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
            <center> <i className="fa-solid fa-child fa-4x" style={{color: "aliceblue"}}></i></center>
           
            <p>Body Transformation</p>
        </div>
        <div className="cont">
            <center>  <i className="fa-solid fa-phone-volume fa-4x" style={{color: "aliceblue"}}></i></center>
          
            <p>Weekly Consultation</p>
        </div>

    </div>
  
    </>
  )
}

export default Features