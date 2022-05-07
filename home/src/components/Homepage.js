import React, { useEffect } from 'react'
import Styles from './Homepage.module.css'
import { SliderData } from './SliderData'
import {useState} from 'react';
import Slider from './Slider';
import SliderBox from './Slider';


const Homepage=()=> {

    const [currentSlide,setCurrentSlide]=useState(0);
    const slideLength=SliderData.length;

    const nextSlide=()=>{
        setCurrentSlide(currentSlide===slideLength-1 ? 0 : currentSlide+1)
    }

    const prevSlide=()=>{
        setCurrentSlide(currentSlide===0 ? slideLength-1: currentSlide-1)
    }

    const autoScroll=true;
    let slideInterval;
    let intervalTime=3000;

    const autoSlide=()=>{
   slideInterval= setInterval(nextSlide,intervalTime);
    }

  useEffect(()=>{
      setCurrentSlide(0)
  },[])
    
    useEffect(()=>{
        if(autoScroll){
        autoSlide();
        }
        return()=> clearInterval(slideInterval);
    },[currentSlide])
 
   
  return (
    
    <>
    <div className={Styles.imgDiv}>
       
    
    </div>
       
  <div className={Styles.div2}>
      <div>
          <h1 className={Styles.h1Tag} style={{textAlign:'left', marginBottom:'-30px',marginTop:'40px'}}>It's not just food,</h1>
          <h1 className={Styles.h1Tag} style={{textAlign:'left',color:'rgb(142,192,56)'}}>It's a lifestyle!</h1>
          <p  style={{textAlign:'left'}}>We break the stereotype ‘healthy eating is boring”. Reach your weight,
               health and workout goals with deliciously healthy food. We have various diet plans customised to suit your specific health and weight requirements. With a new changing menu every week, we bring to you food from various cuisines,
               with a healthy twist. We make healthy eating fun and effortless!</p>
      </div>
      <div>
          <img className={Styles.img2} src='https://www.fitmeals.co.in/wp-content/uploads/2019/10/health-bottle-cut.jpg'/>
      </div>
      <div>
          <div className={Styles.para2}>
          <i class="fas fa-check"></i>
          <p>Custom tailored diet plans.</p>
          </div>
          <div className={Styles.para2}>
          <i class="fas fa-check"></i>
          <p>Free from refined sugars & trans fats.</p>
          </div>
          <div className={Styles.para2}>
          <i class="fas fa-check"></i>
          <p>Different menu every day.</p>
          </div>
          <div className={Styles.para2}>
          <i class="fas fa-check"></i>
          <p>Flexibility of plans</p>
          </div>
          <div className={Styles.para2}>
          <i class="fas fa-check"></i>
          <p>Ongoing nutritionist support.</p>
          </div>
      </div>
      
  </div>
  <button className={Styles.readmore}>Read more</button>
  <div className={Styles.gray}>
  <div className={Styles.div3}>
      <p className={Styles.paragraph}>Our benefits</p>
      <h1 className={Styles.h1Tag}>So Why Choose Fitmeals?</h1>
      <p className={Styles.fitMealpara}>Fitmeals is not a diet system that promotes cleanses, pills, preserved foods or any kind of disordered eating habits. We’re all about wholesome & nourishing foods that make you feel the best version of yourself. .</p>

  </div>

  <div className={Styles.logosDiv}>
      <div><i class="fas fa-box"></i></div>
      
      <div><i class="fas fa-star"></i></div>
      <div><i class="fas fa-truck"></i></div>
      <div><i class="fas fa-check"></i></div>
  </div>
  <div className={Styles.desc}>
      <div>
          <h2 className={Styles.descH2}>Fresh ingredients</h2>
          <p className={Styles.descp}>Procuring fresh and fundamental ingredients required for a wholesome meal.</p>
      </div>
      <div>
          <h2 className={Styles.descH2}>Finest quality</h2>
          <p className={Styles.descp}>All the meals are designed by our nutrition experts using only the best quality ingredients.</p>
      </div>
      <div>
          <h2 className={Styles.descH2}>On time delivery</h2>
          <p className={Styles.descp}> Helping you stay ahead of your diet plans.</p>
      </div>
      <div>
          <h2 className={Styles.descH2}>Preservative-free</h2>
          <p className={Styles.descp}>Your ultimate plan for eating clean without added preservatives.</p>
      </div>
  </div>

  <div className={Styles.wheel}>
      <img className={Styles.wheelImg} src='https://www.fitmeals.co.in/wp-content/uploads/2019/10/plate_rounded.jpg' />
  </div>
  <div className={Styles.greenDiv}>
      <div className={Styles.innerGreenDiv}>
          <p className={Styles.paragraph} >Hungry yet?</p>
          <h1  className={Styles.h1Tag} style={{fontSize:'50px'}}>Choose your Meal Plan</h1>

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
               <h1 className={Styles.h1Fonts} style={{textAlign:'left'}}>Weight Losse Meal Plan</h1>
               <h3 style={{ color: 'rgb(142,192,56)',textAlign:'left'}}>1200-1400 kcal</h3>
               <p className={Styles.pFonts} style={{textAlign:'left'}}>If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.</p>
               <button className={Styles.viewPlanBttn}>View plan</button>
           </div>
       </div>

      </div>
  </div>


{/* overlay box */}
  <div className={Styles.overlayDiv}>
 
  <div className={Styles.overlayContent}>
      <div className={Styles.content}>
          <h1 >Not convinced yet?<br/>Get our<span style={{    color: 'rgb(142,192,56)'}}> 1 week trial plan</span></h1>
          <button className={Styles.orderbttn}>order now</button>
      </div>

  </div>
 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
  </div>

 
{/* end overlay box */}
</div>

<div className={Styles.dietplans}>
  <div className={Styles.text}>
      <h1 className={Styles.h2} >Diet Plans</h1>
      <h2 style={{marginTop:'-15px',color:'#292d35'}}>The Ultimate DIY Meal Guide</h2>
      <p className={Styles.pFonts}>Say goodbye to crash diets and give us the opportunity to create highly tailored plans that suit your body type and food preferences distinctively. Just give us your details and goals and we’ll do all the meal planning for you!</p>
  <button className={Styles.learnmore}>learn more</button>
  </div>
  <div className={Styles.img}>
      <img src='https://www.fitmeals.co.in/wp-content/uploads/2019/02/dish_07-1-360x360-1.jpg'/>
  </div>
</div>
<p className={Styles.para }>Client Diaries</p>
<div className={Styles.diariesSliding}>
  
    <button className={Styles.prev} onClick={prevSlide}></button>
    <button className={Styles.next} onClick={nextSlide}></button>
       {SliderData.map((slide,index)=>{
        return(
            <div className={index==currentSlide ? "slide current":"slide"} key={index}>
            {index===currentSlide &&(<img src={slide.image}/>)}
             
         </div>
        )
    })}
 </div>
    {/* testimonial div */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,128C640,128,800,160,960,170.7C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div className={Styles.testimonial}>
    
    <p className={Styles.paragraph} >Testimonial</p>
    <h1 className={Styles.h1Tag}>What our clients say</h1>
    <div className={Styles.logoDiv}>
    <i class="fas fa-quote-right"></i>
    </div>
    <div className={Styles.sliderContain}>
    <div className={Styles.SliderBox}> <SliderBox/></div>
    </div>
   
  
  <img className={Styles.flowerImg} src='https://www.fitmeals.co.in/wp-content/uploads/2019/10/testimonials-bg.png'/>
   </div>
   <div className={Styles.mailList}>
       <h1  style={{fontSize:'50px',paddingTop:'60px'}}>Join our <span style={{color:'white'}}>mailing list</span></h1>
       <p className={Styles.pFonts}> Subscribe to our newsletter to stay up to date with our discounts, new products, recipes & nutrition tips.</p>
   <div className={Styles.emailBox}>
   <input className={Styles.emailInput} type='email' placeholder='Your email...'/><button className={Styles.subscribeBttn}>Subscribe</button>
   </div>
    
   </div>
   <p className={Styles.paragraph}>Food blog</p>
   <h1 className={Styles.h1Tag}>Recent articles</h1>
   <div className={Styles.recentArticleDiv}>
       <div className={Styles.recentImg1}>
           <div className={Styles.img1Box}>
           <img src='https://www.fitmeals.co.in/wp-content/uploads/2021/06/unnamed-768x768.jpg'/>
           </div>
          
           <button  className={Styles.recentBttn}>Uncategorized</button>
           <h1>Fitmeals India Collaboration With Nestle a+ Grekyo</h1>
           <p className={Styles.pFonts}>We’re excited to announce our collaboration with Nestle a+. Now you can get a Nestle a+ Grekyo with every breakfast meal! Wh …</p>
           <hr></hr>
           <div className={Styles.details}>
           <i class="fas fa-calendar-alt"></i>
           <p className={Styles.pFonts}>June 16, 2021</p>
           <i class="fas fa-comment-dots"></i>
           <p className={Styles.pFonts}>0 comments</p>
       
   </div>
       </div>
       <div className={Styles.recentImg1}>
           <div className={Styles.img1Box}>
           <img src='https://www.fitmeals.co.in/wp-content/uploads/2021/06/mangoes-1320111_640.jpg'/>
           </div>
          
           <button  className={Styles.recentBttn}>Nutrition</button>
           <h1>5 reasons why you should eat mangoes- Myth busting Mondays</h1>
           <p className={Styles.pFonts}>The mango season is nearing an end right now and if for any reason you’ve avoided mangos like a plague then this article is just f</p>
           <hr></hr>
           <div className={Styles.details}>
           <i class="fas fa-calendar-alt"></i>
           <p className={Styles.pFonts}>June 7, 2021</p>
           <i class="fas fa-comment-dots"></i>
           <p className={Styles.pFonts}>0 comments</p>
       
   </div>
       </div>
       <div className={Styles.recentImg1}>
           <div className={Styles.img1Box}>
           <img src='https://www.fitmeals.co.in/wp-content/uploads/2021/05/man-461195_640.jpg'/>
           </div>
          
           <button className={Styles.recentBttn}>Nutrition</button>
           <h1>A guide to clean bulking</h1>
           <p className={Styles.pFonts}>Want to gain weight or build muscle? The only solution is to eat surplus. Contrary to what most people think, it’s actually very har …</p>
           <hr></hr>
           <div className={Styles.details}>
           <i class="fas fa-calendar-alt"></i>
           <p className={Styles.pFonts}>May 28, 2021</p>
           <i class="fas fa-comment-dots"></i>
           <p className={Styles.pFonts}>0 comments</p>
       
   </div>
       </div>
   </div>
   
    </>
  )
}

export default Homepage