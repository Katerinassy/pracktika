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
import girl_2 from './img/girl_2.svg';
import man from './img/man.svg';
import vector_black from './img/Vector_black.svg';
import vector_pirple from './img/ArrowUpRight.svg';
import bloom from './img/Bloomberg.svg';
import forbes from './img/Forbes.svg';
import fromcompany from './img/Fast company.svg';
import button from './img/Button.svg';
import model_1 from './img/model_1.svg';
import model_2 from './img/model_2.svg';
import model_3 from './img/model_3.svg';
import model_4 from './img/model_4.svg';
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
      <div className='Block_5 flex justify-center mt-20'>
        <div className='Girl_2  relative '><img src={girl_2} />
          <div className='cont2 flex absolute bottom-5 ml-8'>
            <p className='women text-black text-sm flex font-medium '>WOMEN</p>
            <img src={vector_black} className='mt-[4px] pl-2  ' alt="" />

          </div>

        </div>
        <div className='man relative'>
          <img src={man} />
          <div className='cont3 flex absolute bottom-5 ml-8 '>
            <p className='men text-black text-sm flex font-medium '>MEN
              <img src={vector_black} className=' mt-[4px] pl-2 ' alt="" />
            </p>
          </div>

        </div>
      </div>
      <div className='Block_6 mt-28'>
        <p className='t text-center font-bold text-5xl'>Hot off the press</p>
      </div>
      <div className="h-[286px] p-8 rounded-lg border border-black/10 justify-start items-center gap-16 inline-flex mt-8 mx-11">
        <div className="h-[199px] flex-col justify-start items-start gap-14 inline-flex">
          <div className="self-stretch h-[123px] flex-col justify-start items-start gap-6 flex">
            <div className="w-[130px] h-6 pl-[0.74px] pr-[0.58px] justify-center items-center inline-flex" />
            <img src={bloom} alt="" />
            <div className="self-stretch text-black text-lg font-medium font-['Inter'] leading-[25.20px]">“First Light: Where great design and the finest materials unite in ultimate comfort”</div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="text-center text-[#a857f9] text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">Read article</div>
            <img src={vector_pirple} alt="" />
            <div className="w-5 h-5 px-[4.37px] pt-[4.38px] pb-[4.37px] justify-center items-center flex" />
          </div>
        </div>
        <div className="w-[222px] h-px  rotate-90 opacity-10 border border-black"></div>
        <div className="h-[199px] flex-col justify-start items-start gap-14 inline-flex">
          <div className="self-stretch h-[123px] flex-col justify-start items-start gap-6 flex">
            <div className="w-[130px] h-6 pl-[0.74px] pr-[0.58px] justify-center items-center inline-flex" />
            <img src={forbes} alt="" />
            <div className="self-stretch text-black text-lg font-medium font-['Inter'] leading-[25.20px]">“First light proves it is possible to combine great design with the finest materials available.”</div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="text-center text-[#a857f9] text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">Read article</div>
            <img src={vector_pirple} alt="" />
            <div className="w-5 h-5 px-[4.37px] pt-[4.38px] pb-[4.37px] justify-center items-center flex" />
          </div>
        </div>
        <div className="w-[222px] h-px  rotate-90 opacity-10 border border-black"></div>
        <div className="h-[199px] flex-col justify-start items-start gap-14 inline-flex">
          <div className="self-stretch h-[123px] flex-col justify-start items-start gap-6 flex">
            <div className="w-[130px] h-6 pl-[0.74px] pr-[0.58px] justify-center items-center inline-flex" />
            <img src={fromcompany} alt="" />
            <div className="self-stretch text-black text-lg font-medium font-['Inter'] leading-[25.20px]">“Redefining excellence with premium materials and visionary robust design.”</div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="text-center text-[#a857f9] text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">Read article</div>
            <img src={vector_pirple} alt="" />
            <div className="w-5 h-5 px-[4.37px] pt-[4.38px] pb-[4.37px] justify-center items-center flex" />
          </div>
        </div>
      </div>
      <div className='block_7 mt-32'>
        <p className='t text-center font-bold  text-5xl'>Women — Must Haves</p>
      </div>
      <div className='block_7_1 mt-5 flex'>
        <img src={button} alt='' />
      </div>
      <div className='Block_7 flex justify-center  gap-8 ml-5'>
        <div className='block_7_2  '>
          <img src={model_1} alt='' />
          <div className='tex flex ml-5 mt-3'>
            <p className='gap-4'>Basic Shirt</p>
            <p className=''>€49</p>
          </div>

        </div>
        <div className='block_7_3 '>
          <img src={model_2} alt='' />
          <div className='tex flex  mt-3 ml-5'>
            <p className=''>Beige Jumper</p>
            <p className=''>€99</p>
          </div>
        </div>
        <div className='block_7_4'>
          <img src={model_3} alt='' />
          <div className='tex flex mt-3 ml-5'>
            <p className=''>Signature Jacket</p>
            <p className=''>€249</p>
          </div>
        </div>
        <div className='block_7_4'>
          <img src={model_4} alt='' />
          <div className='tex flex mt-3 ml-5'>
            <p className=''>Navy Jumper</p>
            <p className=''>€49</p>
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
