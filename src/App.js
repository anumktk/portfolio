import './App.css';
import Router from './Components/Router';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import '../components/Swiper.css'
function App() {
  return (
    <div className='overflow-x-auto'>
      <Router/>
    </div>
  );
}

export default App;
