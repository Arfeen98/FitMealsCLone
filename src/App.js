
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import ImageSlider from './components/ImageSlider';




function App() {
  return (
  <>
    <Navbar/>
    <ImageSlider slides={SliderData} />
  </>

  );
}

export default App;

