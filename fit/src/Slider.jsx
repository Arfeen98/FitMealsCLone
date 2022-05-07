import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Slider() {
  return (
    <>
                <Carousel>
  <Carousel.Item interval={1000}>
      <div className='sliderCont'>
          <div className='subsliderCont'>
              <img style={{width:"90%"}} src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div>
          <div className='subsliderCont'>
              <img style={{width:"90%"}} src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div>
          <div className='subsliderCont'>
              <img style={{width:"90%"}} src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div>
       
        
          

      </div>
    {/* <img style={{width:"90%"}}
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
    {/* <img style={{width:"90%"}}
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
    <div className="sliderCont">

    <div className='subsliderCont'>
              <img style={{width:"90%"}} src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div>
          <div className='subsliderCont'>
              <img style={{width:"90%"}} src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div>
          <div className='subsliderCont'>
              <img style={{width:"90%"}} src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    {/* <img style={{width:"90%"}}
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */} 

<div className="sliderCont">
<div className='subsliderCont'>
              <img style={{width:"90%"}} src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div>
          <div className='subsliderCont'>
              <img style={{width:"90%"}} src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div>
          <div className='subsliderCont'>
              <img style={{width:"90%"}} src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div>
</div>

</Carousel.Item>
</Carousel>
    
    </>
  )
}

export default Slider