import React from "react"
import GetFit from "./GetFit"
import Place from "./Place"
import Plan from "./Plan"
import Right from "./Right"

import './weight.css'
const WeightMealPlans = () => {
  return (
      <> 
      <div id="top">

      <div id='background'>
          {/* <img src="https://www.fitmeals.co.in/wp-content/uploads/2018/02/inner-page.jpg" alt="" /> */}
      </div>
          <h1 className="img_over">Weight Loss Meal Plan</h1>
      </div>
       <br />
       <div id="Cont">
          <div id="left_cont">
              <div id="left_cont1">
                  <p>If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.</p>
                  <br />
                  <p>Disclaimer: This isn’t going to be any type of a crash diet which will give you magical results; we’ll aim for 2-4kgs per month and all your meals will be designed by our nutritionists who focus not only on seeing results but also on ensuring that there’s no compromise on your mental and physical health.</p>
              </div>
              <div id="left_cont2">
                  <button className="btn">View Sample Menu</button>
              </div>
          </div>
          <div id='right_cont'>
              <Right/>
          </div>
       </div>
       <div id="how_work">
           <h2>How Does It Work ?</h2>
       </div>
       <Plan/>
       <Place/>
       <GetFit/>
      </>    
  )
}

export default WeightMealPlans
