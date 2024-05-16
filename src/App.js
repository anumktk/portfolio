import './App.css';
import Router from './Components/Router';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Animatedcurser from './Components/Animatedcurser';


function App() {
  return (
    
    <div className='overflow-x-auto' >
      <Animatedcurser />
      <Router/>
    </div>
   
  );
}

export default App;
