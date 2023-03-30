import React from 'react'
import Audio from '../assets/audio.png'
import Live from '../assets/live.png'
import Record from '../assets/record.png'
import Strip from '../assets/strip.png'
import Notes from '../assets/notes.png'
import Dots from '../assets/dots.png'
import Combo from '../assets/combo.png'
import Crown from '../assets/crown.png'
import GreenWaves from '../assets/greenwaves.png'
import SemiCircle from '../assets/half.png'

const Courses = () => {
  return (
    <div className='w-[100%] relative '>
        <img className='absolute w-[50px] top-3 md:top-[9%] md:left-[9%]' src={Crown}/>
        <img className='absolute w-[50px] right-1 top-5 md:top-[4%] md:right-[1px]' src={GreenWaves}/>
        <img className='absolute w-[50px] right-1 bottom-[5%] md:bottom-[25%] md:right-[1px]' src={SemiCircle}/>

        {/* CONTENTS */}
        <div className="flex relative w-[95%] py-8 justify-between min-h-max overflow-hidden mt-4 items-center flex-col mx-auto md:w-[75%] md:flex-row">
            <img className='absolute right-[-1px] bottom-2' src={Dots} />
            <div className="flex  text-center items-center flex-col w-[95%] md:items-start md:text-left md:w-[53%]">
                <h1>High quality video, audio & live classes</h1>
                <p>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>
                <button className='bg-[#004DB3] text-white font-[700] my-4 py-3 px-6 rounded-[4px]'>View Courses</button>
                <div className="w-[90%] flex flex-col items-center gap-x-4 md:flex-row">
                    <div className=" flex p-4 my-2 items-center pr-8 gap-x-4 bg-white rounded-[4px] font-[700]">
                        <img src={Audio} /> Audio Classes
                    </div>
                    <div className=" flex p-4 my-2 items-center pr-6 gap-x-3 bg-white rounded-[4px] font-[700]">
                    <img src={Live} /> Live Classes
                    </div>
                </div>
                <div className="w-[90%] flex flex-col items-center gap-x-4 md:flex-row">
                    <div className=" flex p-4 my-2 items-center pr-8 gap-x-4 bg-white rounded-[4px] font-[700]">
                        <img src={Record} /> Recorded Classes
                    </div>
                    <div className=" flex p-4 my-2 items-center pr-8 gap-x-3 bg-white rounded-[4px] font-[700]">
                    <img src={Notes} /> 50+ Notes
                    </div>
                </div>
            </div>
            {/* IMAGES */}
            <img className='absolute bottom-[23%] left-[2%] z-[100] w-[130px] md:top-[25%] md:left-[50%] md:w-[220px]' src={Strip} />
            <div className=" flex">
                <img className=' w-[680px] z-10 md:top-2' src={Combo}/>
            </div>
        </div>
    </div>
  )
}

export default Courses