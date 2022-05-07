import React from 'react'

const Navbar = () => {
    
  return (
      <>
      
      <div className='navbar_head'>
        
          <div className='leftDiv'>
               <div><i className="fa fa-map-marker fa-x" ></i>Food Delivery Only In Hyderabad</div>
               <div><i className='fas fa-phone-volume fa-x' ></i><strong>9100347480</strong></div>
               <div><i className="fa fa-envelope fa-x"></i>fitmealsindia@gmail.com</div>
       
          </div>

      
         <div className='rightDiv'>
              <div><i className="glyphicon glyphicon-user fa-2x"></i></div>
             <div><i className="fa fa-search fa-2x"></i></div>
             
             <div><i className="fa fa-shopping-cart fa-2x"></i></div>
         </div>
          

         
      </div>
       <div className='navbar'>
            <div className='nav_first'>
                <img src='https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-black.png'/>
            </div>
            <div className='nav_sec'>
                <div>
                    <div className='div_hover'>
                        Home
                    </div>
                    </div>
                <div>
                                        
                    <div className="dropdown">
                    <button className="dropbtn">Meal Plans <span className="caret"></span></button>
            
                    <div className="dropdown-content">
                    <a href="#">Weight Loss Meal Plan</a>
                    <a href="#">Maintenance Meal Plan</a>
                    <a href="#">Athletic Meal Plan</a>
                    <a href="#">Keto Meal Plan</a>
                    <a href="#">Transformation Challenges</a>
                    </div>
                    </div>
                </div>
                <div>  <div className='div_hover'>
                      Health Coaching
                    </div></div>
                <div>
                <div className="dropdown">
                    <button className="dropbtn">Products <span className="caret"></span></button>
            
                    <div className="dropdown-content">
                    <a href="#">Vegan Sweets</a>
                    <a href="#">Law_cal Suaces</a>
                    <a href="#">Nut Butters</a>
                    <a href="#">fresh Bakes</a>
                    <a href="#"></a>
                    </div>
                    </div>
                </div>
                <div>
                <div className='div_hover'>
                     Blog
                    </div>
                </div>
                <div>
                <div className="dropdown">
                    <button className="dropbtn">About Us <span class="caret"></span></button>
            
                    <div className="dropdown-content">
                    <a href="#">Our Story</a>
                    <a href="#">FAQ</a>
                    <a href="#">Testimonials</a>
                   
                    
                    </div>
                </div>
                </div>
            </div>
            <div className='nav_third'>
                 Call : 9100347480
            </div>
         
        </div>
     
      </>
   
  )
}

export default Navbar