import React from 'react'
import '../App.css'
import Kid from '../assets/kid.png'
import Mentor from '../assets/mentor.png'
import Clock from '../assets/time.png'
import Group from '../assets/meetings.png'
import Price from '../assets/price.png'
import Triangle from '../assets/triangle.png'
import Loop from '../assets/loop.png'
import YellowWave from '../assets/yellowwave.png'
import Dot from '../assets/yellow.png'


const WhyUs = () => {
    const Details = [
        {
            pic: Mentor,
            header: 'Experienced Mentor',
            body: 'High-Defination Video Is Video Of Higher Resolution And Quality Than Standard definition. Wile There’s No Standard Meaning For High Definition, Generally Any Standard Video Image'
        },
        {
            pic: Clock,
            header: 'One-On-One Meetings',
            body: 'High-Defination Video Is Video Of Higher Resolution And Quality Than Standard definition. Wile There’s No Standard Meaning For High Definition, Generally Any Standard Video Image'
        },
        {
            pic: Group,
            header: 'One-On-One Meetings',
            body: 'High-Defination Video Is Video Of Higher Resolution And Quality Than Standard definition. Wile There’s No Standard Meaning For High Definition, Generally Any Standard Video Image'
        },
        {
            pic: Price,
            header: 'Affordable Prices',
            body: 'High-Defination Video Is Video Of Higher Resolution And Quality Than Standard definition. Wile There’s No Standard Meaning For High Definition, Generally Any Standard Video Image'
        },

    ]

  return (
    <div className="flex mt-[4%] relative">
        <img src={YellowWave} className="hidden absolute right-[26%] top-14 md:flex"/>
        <img src={Dot} className="hidden absolute left-[26%] top-14 md:flex"/>
        
        {/* HEADER */}
        <div className='flex  justify-between flex-col items-center w-[95%] mt-[4%] md:text-left md:flex-row md:w-[85%] mx-auto'>
            <img src={Triangle} className="absolute left-2 bottom-14"/>
            <div className="flex flex-col md:w-[50%]">
                <h1>This Is Why We Are Best From Others</h1>
                <p className='py-2 md:w-[70%]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                <img src={Kid} className='w-[750px] py-2'/>
            </div>
            
            {/* CARDS */}
            <div className="flex flex-col items-center text-left flex-wrap justify-around md:flex-row md:w-[45%]">
                {
                    Details.map((detail)=> (
                    <div className="flex py-8 px-4 flex-col my-8 w-[310px] bg-white">
                        <img src={detail.pic} className="w-[45px] pb-4"/>
                        <h3 className='py-4'>{detail.header}</h3>
                        <p>{detail.body}</p>
                    </div>
                    ))
                }
            </div>
            <img src={Loop} className="absolute right-2 bottom-[20%] md:bottom-8"/>
        </div>

    </div>
  )
}

export default WhyUs