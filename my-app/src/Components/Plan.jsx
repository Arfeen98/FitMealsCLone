import React from 'react'
import './weight.css'
const Plan = () => {
  return (
  
      <div id="flex_4">
           <div className='flex_4child'>
             <div className='flex_4child1'></div>
             <div className='flex_4child2'>
               <h3>Select your plan</h3>
             </div>
             <div className='flex_4child3'>
               <p>Choose the meal plan you want based on your preferences.</p>
             </div>
           </div>
           <div className='flex_4child'>
             <div className='flex_4child1'></div>
             <div className='flex_4child2'>
               <h3>Nutrition Support</h3>
             </div>
             <div className='flex_4child3'>
               <p>Our nutritionists will design your meals & will be available for further consultations.</p>
             </div>
           </div>
           <div className='flex_4child'>
             <div className='flex_4child1'></div>
             <div className='flex_4child2'>
               <h3>Home delivery</h3>
             </div>
             <div className='flex_4child3'>
             Freshly prepared, hot meals will be delivered right at your doorstep.
             </div>
           </div>
           <div className='flex_4child'>
             <div className='flex_4child1'></div>
             <div className='flex_4child2'>
               <h3>Enjoy your meal</h3>
             </div>
             <div className='flex_4child3'>
             <p> 
             Microwave the food if needed then dig in!</p>
             </div>
           </div>
       </div>
    
  )
}

export default Plan
