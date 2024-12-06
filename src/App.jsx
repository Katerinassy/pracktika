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
import button_2 from './img/Button (1).svg';
import box from './img/box.svg';
import box_2 from './img/box_2.svg';
import star from './img/star.svg';
import cap from './img/cap.svg';
import boy from './img/boy.svg';
import inerier from './img/block_10.svg';
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

      <div className='Block_44 mt-32 flex justify-center'>
        <div className="flex justify-between relative">
          <img src={boy} className='rounded-lg w-[500px] h-[536px] mr-9 bg-gray-400' />
          <button className='absolute left-10 btn_1 mt-[434px]  w-[153px] h-16 bg-black  text-gray-50 rounded-md font-bold'>Shop Shirts</button>
          <div className="h-[536px] w-[500px] p-10 ml-6 bg-[#fb791c] rounded-lg flex-col justify-between items-start inline-flex ">
            <p className="self-stretch grow shrink basis-0 text-black text-[40px] font-bold font-['Inter'] leading-[48px]">“ First Light promises quality, timeless designs and with our mission it is truly a buy it for life purchase. “</p>
            <p className="self-stretch grow shrink basis-0 text-black text-sm font-bold font-['Inter'] mt-52 leading-[30px]">— Guera Latissa, Creative Director</p>
          </div>
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
      <div className='Block_7 flex justify-center  gap-8 ml-5'>
        <button className=''><img src={button} alt="" /></button>
        <div className='block_7_2  '>
          <img src={model_1} alt='' />
          <div className='tex flex mt-3 justify-between'>
            <p className=''>Basic Shirt</p>
            <p className=''>€49</p>
          </div>
        </div>
        <div className='block_7_3 '>
          <img src={model_2} alt='' />
          <div className='tex flex mt-3 justify-between'>
            <p className=''>Beige Jumper</p>
            <p className=''>€99</p>
          </div>
        </div>
        <div className='block_7_4'>
          <img src={model_3} alt='' />
          <div className='tex flex mt-3 justify-between'>
            <p className=''>Signature Jacket</p>
            <p className=''>€249</p>
          </div>
        </div>
        <div className='block_7_4'>
          <img src={model_4} alt='' />
          <div className='tex flex mt-3 justify-between'>
            <p className=''>Navy Jumper</p>
            <p className=''>€49</p>
          </div>
        </div>
        <button className=''><img src={button_2} alt="" /></button>
      </div>

      <div className="block-8-inner justify-center gap-[32px] flex flex-col mt-[64px]">

        <div className='block_8 mt-32'>
          <p className='t text-center font-bold  text-5xl'>We always have your back</p>
        </div>

        <div className='block_8_1 justify-center mp-[64px] flex gap-6'>
          <div className='block1-1 w-1/2 h-[600px]  flex items-end justify-center pb-[24px]'>
            <button className='btn_1 w-[253px]    h-16 bg-black text-gray-50 rounded-md font-bold'>100% Premium Cotton
              We use ethically sourced cotton only.</button>
          </div>
          <div className="block-2-3 flex flex-col gap-[24px]">

            <div className="block1-2">
              <button className='btn_2 w-[253px]  h-14 bg-black ml-44 mt-56 text-gray-50 rounded-md font-bold'>Made in Portugal
                With hand finished details</button>
            </div>
            <div className="block1-3">
              <button className='btn_3 w-[253px]  h-12 bg-black ml-44 mt-56 text-gray-50 rounded-md font-bold'>Breathable material
                Keeping you cool throughout the day</button>
            </div>
          </div>
        </div>
      </div>

      <div className='block_9 justify-center text-black flex mt-32'>
        <div className="w-[1216px] opacity-10 border border-black">
          <div className="w-[1216px] h-14 justify-between items-start inline-flex">
            <div className="justify-start items-center text-black gap-4 flex">
              <img src={cap} className='gh ' />
              <p className="w-[140px]text-base font-medium font-['Inter']  text-black leading-tight">Premium stain resistant fabrics</p>
            </div>
            <div className="justify-start items-center text-black gap-4 flex">
              <img src={box} className='gh ' />
              <p className="w-[140px] text-base font-medium font-['Inter']  text-black leading-tight">Free Express Shipping</p>
            </div>
            <div className="justify-start text-black  items-center gap-4 flex">
              <img src={box_2} className='gh ' />
              <p className="w-[140px]  text-base font-medium font-['Inter']  text-black leading-tight">Free returns within 30 days</p>
            </div>
            <div className="justify-start items-center text-black gap-4 flex">
              <img src={star} className='gh ' />
              <p className="w-[140px] text-black text-base font-medium font-['Inter'] leading-tight">Customers rate  us 4.8 / 5.0</p>
            </div>
          </div>
        </div>
      </div>

      <div className='block_10 justify-center flex'>
        <div className='rounded-lg h-[536px] mt-9 flex text-center'>
          <img src={inerier} className='gh' />
        </div>

        <div className='bg-white rounded-lg w-[608px] h-[536px] mt-9'>
          <div className='ml-11 block_head'>
            <p className='w-[308px] text-black text-[32px] mt-7 font-bold'>Visit our popup shop</p>
            <p className='w-[180px] text-black text-base mt-8  font-bold'>Willemsparkweg 63 1071 GS Amsterdam The Netherlands</p>
          </div>
          <div className='weed flex mt-8 ml-11 flex-col gap-5'>
            <div className='flex justify-between items-center'>
              <p className='mr-4  font-bold'>Monday</p>
              <p className='w-[180px] text-black text-base  font-bold'>12.00 - 19.00</p>
            </div>
            <div className='flex  justify-between items-center'>
              <p className='mr-4 font-bold'>Tuesday</p>
              <p className='w-[180px] text-black text-base font-bold'>10.00 - 19.00</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='mr-4 font-bold'>Wednesday</p>
              <p className='w-[180px] text-black text-base font-bold'>10.00 - 19.00</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='mr-4 font-bold'>Thursday</p>
              <p className='w-[180px] font-bold text-black text-base'>10.00 - 21.00</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='mr-4 font-bold'>Friday</p>
              <p className='w-[180px] font-bold text-black text-base'>10.00 - 19.00</p>
            </div>
            <div className='flex justify-between font-bold items-center'>
              <p className='mr-4 font-bold'>Saturday</p>
              <p className='w-[180px] text-black font-bold text-base'>10.00 - 18.00</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='mr-4 font-bold'>Sunday</p>
              <p className='w-[180px] font-bold text-black text-base'>12.00 - 18.00</p>
            </div>
          </div>
        </div>
      </div>


    </div >
  );
}

export default App;
