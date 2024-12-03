import Vector from './img/Vector.svg'
import FIRST from './img/FIRST.png';
import LIGHT from './img/LIGHT.svg';
import Subtract from './img/Subtract.svg';
import Numero from './img/Numero.svg';
import Busness from './img/Busness.svg';
import kinifolk from './img/kinifolk.svg';
import fashion from './img/fashion.svg';
import hypebeast from './img/hypebeast.svg';
import ArrowLeft from './img/ArrowLeft.svg';
import ArrowRight from './img/ArrowRight.svg';
import shirt from './img/shirt 1.svg';
import girl from './img/girl.svg';
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
      <div className="block_1 flex justify-center my-10 ">
        <img src={FIRST} alt='FIRST'></img>
        <img src={Subtract} alt='Subtract'></img>
        <img src={LIGHT} alt='LIGHT'></img>
      </div>
      <div className='block_2 h-[773px] flex  items-end justify-center mx-0 '>
        <div className="div flex w-[1217px] justify-between items-center pl-[112px]">

          <p className='Header_block2 w-[360px] text-white text-[32px] mb-8 font-bold'>Spring Season</p>
          <button className='link_btn flex mb-8'>
            view collection
            <img src={Vector} alt="" />
          </button>
        </div>
      </div>
      <div className="bg-[#fb791c]">

        <div className='Block_3 mx-28 py-12  justify-between items-start gap-16 flex align-middle'>
          <img src={Numero} alt="" />
          <img src={Busness} alt="" />
          <img src={kinifolk} alt="" />
          <img src={fashion} alt="" />
          <img src={hypebeast} alt="" />
        </div>
      </div>
      <div className='Block_4 flex'>
        <div className='Shirt w-1/2 justify-center text-center mt-56'>
          <div className="flex justify-center ">
            <button className=''><img src={ArrowLeft} alt="" /></button>
            <img src={shirt} className='gh ' />
            <button className=''><img src={ArrowRight} alt="" /></button>
          </div>
          <p className='Name '>Basic Shirt</p>
          <p className='price'>€49</p>
        </div>
        <div className='girl w-1/2'>
          <button className='btn_1 mt-[524px] w-[153px] ml-[30px]  h-16 bg-black text-gray-50 rounded-md font-bold'>Shop Shirts</button>
        </div>
      </div>
    </div >
  );
}

export default App;
