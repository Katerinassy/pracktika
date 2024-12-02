
import frame from './img/frame.svg'
import FIRST from './img/FIRST.png';
import LIGHT from './img/LIGHT.svg';
import Subtract from './img/Subtract.svg'
import './index.css'
function App() {
  return (
    <div className="App">
      <div className='header w-full px-4 py-3 bg-[#fb791c] justify-between items-start gap-2 flex'>
        <div class="h-2 justify-start items-start gap-3 inline-flex">
          <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
          <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
          <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
        </div>
        <p className="text-center text-[#222222] text-sm font-bold  uppercase leading-tight tracking-wide ">Summer sale up to 50% off</p>
        <div class="h-2 justify-start items-start gap-3 inline-flex">
          <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
          <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
          <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="block_1 flex">
        <img scr={FIRST} alt='FIRST'></img>
        <img scr={Subtract} alt='Subtract'></img>
        <img scr={LIGHT} alt='LIGHT'></img>
      </div>
      <div className='block_2'>
      <img scr={frame} alt='frame'></img>
      </div>
    </div>
  );
}

export default App;
