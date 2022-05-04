import React from "react"
import GetFit from "./GetFit"
import Place from "./Place"
import Plan from "./Plan"

import './weight.css'
const WeightMealPlans = () => {
  return (
      <> 
      <div id='background'>
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
              <div id="right_cont1">
                  <h6>What our meals look like:</h6>
              </div>
              <div id="right_cont2"></div>
          </div>
       </div>
       <div id="how_work">
           <h2>How Does It Work ?</h2>
       </div>
       <Place/>
       <Plan/>
       <GetFit/>
      </>
    
  )
}

export default WeightMealPlans
