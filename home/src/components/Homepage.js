import React from 'react'
import Styles from './Homepage.module.css'
import { SliderData } from './SliderData'

function Homepage() {
    // let images = ["https://sslimages.shoppersstop.com/sys-master/root/h69/hee/27312096247838/allen-solly_carousal-web--26-03-2022new-main-carousel-hp.jpg", "https://sslimages.shoppersstop.com/sys-master/root/h09/hb0/27309566722078/Wedding-Main-Banner-Web--hp-pg-25-03-2022.jpg", "https://sslimages.shoppersstop.com/sys-master/root/hb7/h8b/27287371743262/watch_carousal-web.jpg","https://sslimages.shoppersstop.com/sys-master/root/h4d/h18/27319630725150/web_hp_caudalie_main-carousel_20220328.jpg",];
    // const slideImagfun=(images,slideshow)=>{

    //     let img = document.createElement("img");
    //     img.src = images[0];
    //     let i = 0;
    //     setInterval( ()=> {
    //        if (i == images.length) {
    //               i = 0;
    //             }
    //     let imgUrl = images[i++];
    //     let img = document.createElement("img");
    //     img.src = imgUrl;
    //     img.setAttribute("style", "width:100%;  height: 200px;");
    //     slideshow.innerHTML = null;
    //     // slideshow.append(imgDiv)
    //     }, 2000);
    //  }
    console.log(SliderData)
    
  return (
    
    <>
    <div className={Styles.imgDiv}>
    {SliderData.map((slide,index)=>{
              
              return
            (
            <img src={slide.image} alt='travel image' />
            
            )
               
          })}
    </div>
       
  <div className={Styles.div2}>
      <div>
          <h1 className={Styles.h1} style={{textAlign:'left', marginBottom:'-30px',marginTop:'40px'}}>It's not just food,</h1>
          <h1 className={Styles.h1} style={{textAlign:'left',color:'greenyellow'}}>It's a lifestyle!</h1>
          <p className={Styles.para} style={{textAlign:'left'}}>We break the stereotype ‘healthy eating is boring”. Reach your weight,
               health and workout goals with deliciously healthy food. We have various diet plans customised to suit your specific health and weight requirements. With a new changing menu every week, we bring to you food from various cuisines,
               with a healthy twist. We make healthy eating fun and effortless!</p>
      </div>
      <div>
          <img className={Styles.img2} src='https://www.fitmeals.co.in/wp-content/uploads/2019/10/health-bottle-cut.jpg'/>
      </div>
      <div>
          <div className={Styles.para2}>
              <img className={Styles.rightLogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k4wrC_idOJYsgDiJ_E7AJPjVCuXCCVFVRQ&usqp=CAU'/>
          <p>Custom tailored diet plans.</p>
          </div>
          <div className={Styles.para2}>
          <img className={Styles.rightLogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k4wrC_idOJYsgDiJ_E7AJPjVCuXCCVFVRQ&usqp=CAU'/> 
          <p>Free from refined sugars & trans fats.</p>
          </div>
          <div className={Styles.para2}>
          <img className={Styles.rightLogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k4wrC_idOJYsgDiJ_E7AJPjVCuXCCVFVRQ&usqp=CAU'/>
          <p>Different menu every day.</p>
          </div>
          <div className={Styles.para2}>
          <img className={Styles.rightLogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k4wrC_idOJYsgDiJ_E7AJPjVCuXCCVFVRQ&usqp=CAU'/>
          <p>Flexibility of plans</p>
          </div>
          <div className={Styles.para2}>
          <img className={Styles.rightLogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k4wrC_idOJYsgDiJ_E7AJPjVCuXCCVFVRQ&usqp=CAU'/>
          <p>Ongoing nutritionist support.</p>
          </div>
      </div>
      
  </div>
  <button className={Styles.readmore}>Read more</button>
  <div className={Styles.gray}>
  <div className={Styles.div3}>
      <p style={{fontSize:'40px',marginBottom:'-50px',color:'greenyellow',fontFamily:'Fira sans'}}>Our benefits</p>
      <h1 style={{fontSize:'50px'}}>So Why Choose Fitmeals?</h1>
      <p style={{width:'70%',margin:'auto'}}>Fitmeals is not a diet system that promotes cleanses, pills, preserved foods or any kind of disordered eating habits. We’re all about wholesome & nourishing foods that make you feel the best version of yourself. .</p>

  </div>

  <div className={Styles.logosDiv}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
  <div className={Styles.desc}>
      <div>
          <h2>Fresh ingredients</h2>
          <p>Procuring fresh and fundamental ingredients required for a wholesome meal.</p>
      </div>
      <div>
          <h2>Finest quality</h2>
          <p>All the meals are designed by our nutrition experts using only the best quality ingredients.</p>
      </div>
      <div>
          <h2>On time delivery</h2>
          <p>Helping you stay ahead of your diet plans.</p>
      </div>
      <div>
          <h2>Preservative-free</h2>
          <p>Your ultimate plan for eating clean without added preservatives.</p>
      </div>
  </div>

  <div className={Styles.wheel}>
      <img className={Styles.wheelImg} src='https://www.fitmeals.co.in/wp-content/uploads/2019/10/plate_rounded.jpg' />
  </div>
  <div className={Styles.greenDiv}>
      <div className={Styles.innerGreenDiv}>
          <p style={{fontSize:'40px',marginBottom:'0px',color:'greenyellow',marginTop:'50px'}}>Hungry yet?</p>
          <h1  style={{fontSize:'50px'}}>Choose your Meal Plan</h1>

          <div className={Styles.buttonDiv}>
          <button className={Styles.bttns}>Weight Loss Meal Plan</button>  
          <button className={Styles.bttns}>   Athletic Meal Plan</button>  
          <button className={Styles.bttns}>Maintenance Meal Plan</button>  
          <button className={Styles.bttns}>Keto Meal Plan</button>  
          </div>
       
       <div className={Styles.innerGreenDiv2}>
           <div>
               <img className={Styles.greenDivImg} src='https://www.fitmeals.co.in/wp-content/uploads/2021/05/weight.jpg'/>
           </div>
           <div>
               <h1 style={{textAlign:'left'}}>Weight Losse Meal Plan</h1>
               <h3 style={{color:'greenyellow',textAlign:'left'}}>1200-1400 kcal</h3>
               <p style={{textAlign:'left'}}>If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.</p>
               <button className={Styles.viewPlanBttn}>View plan</button>
           </div>
       </div>

      </div>
  </div>


{/* overlay box */}
  <div className={Styles.overlayDiv}>
      {/* <img src='https://www.fitmeals.co.in/wp-content/uploads/2018/02/trial_parallax.jpg?id=10779'/> */}
  <div className={Styles.overlayContent}>
      <div className={Styles.content}>
          <h1 >Not convinced yet?<br/>Get our 1 week trial plan</h1>
          <button className={Styles.orderbttn}>order now</button>
      </div>

  </div>
  <img src='https://www.fitmeals.co.in/wp-content/themes/fitmeal/assets/images/wave.svg'/>
  </div>

 
{/* end overlay box */}

<div className={Styles.dietplans}>
  <div className={Styles.text}>
      <h2 style={{color:"greenyellow"}}>Diet Plans</h2>
      <h2 style={{marginTop:'-15px'}}>The Ultimate DIY Meal Guide</h2>
      <p>Say goodbye to crash diets and give us the opportunity to create highly tailored plans that suit your body type and food preferences distinctively. Just give us your details and goals and we’ll do all the meal planning for you!</p>
  <button className={Styles.learnmore}>learn more</button>
  </div>
  <div className={Styles.img}>
      <img src='https://www.fitmeals.co.in/wp-content/uploads/2019/02/dish_07-1-360x360-1.jpg'/>
  </div>
</div>
<p >Client Diaries</p>
  </div>
    </>
  )
}

export default Homepage