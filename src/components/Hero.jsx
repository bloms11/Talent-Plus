import React from 'react'
import '../App.css'
import Logo from '../assets/techtime.png'
import {HiMenu} from 'react-icons/hi'
import HeroImage from '../assets/hero.png'
import PreviewImage from '../assets/Frame100.png'
import Waves from '../assets/Vector.png'
import YellowDot from '../assets/yellow.png'
import GreenDot from '../assets/green.png'
import RigthArrow from '../assets/arrow.png'
import LeftArrow from '../assets/leftarrow.png'
import {FiArrowUpRight} from 'react-icons/fi'

const Hero = () => {
    const NavLinks = [
        {name: "Home"},
        {name: "About Us"},
        {name: "Courses"},
        {name: "Testimonial"},
        {name: "Communnity"}
    ]
  return (
    <div className='bg-[#004DB3] relative flex w-full'>
        <div className="absolute top-[55%]">
            <img src={Waves}/>
        </div>
        <div className="hidden absolute md:flex justify-between pt-2 w-[25%] items-end left-[10%] top-[16%]">
            <img src={GreenDot}/>
            <img src={YellowDot}/>
        </div>
        <div className="overlay ">

            {/* Navbar Starts */}
            <div className=" h-[100px] w-[85%] mx-auto flex justify-between items-center">
                <img className='w-[100px] md:w-[120px]' src={Logo}/>
                <div className="hidden gap-x-5 md:flex">
                    <div className="flex space-x-3 text-[#AAC4E6] font-[700] items-center cursor-pointer">
                        {NavLinks.map((link)=>(
                            <p className='text-[14px] text-[#AAC4E6]'>{link.name}</p>
                        ))}
                    </div>
                    <button className="bg-white font-[700] text-[14px] cursor-pointer rounded-[4px] px-6 py-3 text-[#004DB3]">
                        Enroll Now
                    </button>
                </div>
                <HiMenu className='md:hidden' color='white' size={20}/>
            </div>
            {/* Navbar Ends */}

            {/* Hero Starts */}
            <div className="w-[95%]  mx-auto items-center justify-between relative flex flex-col md:flex-row md:w-[85%]">
                <div className="w-[100%] md:w-[40%] text-center flex flex-col md:items-start items-center md:text-left">
                    <h1 className='text-[34px] text-white font-[700] md:text-[64px]'>Grow your skills to advance your career path</h1>
                    <p className='my-2 text-[#E7E7E7] w-[100%]'>Build Your Future With Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform In The World</p>
                    <div className="flex py-2 space-x-4 text-white">
                        <button className=' rounded-[4px] items-center gap-x-2 flex py-3 px-6 border font-[600]'>Get Started Now <FiArrowUpRight/></button>
                        <button className="bg-white font-[700] text-[14px] cursor-pointer rounded-[4px] px-6 py-3 text-[#004DB3]">
                            Enroll Now
                        </button>
                    </div>
                    <div className="flex items-center py-2">
                        <img className='w-[150px] h-[40px] md:w-[200px] md:h-[55px]' src={PreviewImage}/>
                        <div className="flex items-center flex-col">
                            <p className='font-[700] text-[22px] text-white'>255K+</p>
                            <p className='text-white'>Previews</p>
                        </div>
                    </div>
                    <div className="hidden absolute md:bottom-[22%] left-[45%] md:flex">
                        <img src={RigthArrow}/>
                    </div>
                    <div className="absolute bottom-[52%] left-[88%] md:hidden">
                        <img src={LeftArrow}/>
                    </div>
                </div>
                <div className="w-[100%] md:w-[48%]">
                    <img className='mt-10 md:mt-0' src={HeroImage} />
                </div>
            </div>
            {/* Hero Ends */}

        </div>
    </div>
  )
}

export default Hero