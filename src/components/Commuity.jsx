import React from 'react'
import '../App.css'
import Map from '../assets/techmap.png'
const Commuity = () => {
  return (
    <div className='bg-[#004DB3] relative mt-[4%] flex w-full py-10'>
        <div className="map-overlay">
            <div className="w-[96%] flex flex-col text-center items-center mx-auto md:w-[85%]">
                <p className='tracking-[0.1em] text-white'>JOIN OUR COMMUNITY</p>
                <h1 className='text-white md:w-[90%]'>Are you ready to connect with the future talent of the tech world</h1>
                <p className='text-white my-4'>Meet Up With Other Techstars And Grow Together</p>
                <img className='my-4' src={Map}/>
                <button className='bg-white text-[#004DB3] font-[700] my-4 py-4 px-8 rounded-[4px]'>Join Our Community</button>
            </div>
        </div>
    </div>
  )
}

export default Commuity