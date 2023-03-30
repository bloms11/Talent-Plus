import React from 'react'
import Logo from '../assets/techtime.png'

const Footer = () => {
  return (
    <div className='text-white bg-black mt-[4%] md:h-[500px] w-full py-8'>
        <div className="flex flex-col  w-[95%] mt-8 justify-between mx-auto md:w-[85%] xmd:flex-wrap xmd:flex-row">
            {/* LOGO */}
            <div className="flex flex-col py-4 px-2">
                <img className='w-[100px] md:w-[120px]' src={Logo}/>
                <p className='text-white'>Reach out to us on any of our social media networks</p>
            </div>
            {/* LINKS */}
            <div className="flex py-4 px-2 flex-col">
                <h2>Useful Links</h2>
                <div className="flex flex-col">
                    <ul className='py-4'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Courses</li>
                        <li>Testimonials</li>
                        <li>Our Community</li>
                    </ul>
                </div>
            </div>
            <div className="flex py-4 px-2 flex-col">
                <h2>Community</h2>
                <div className="flex flex-col">
                    <ul className='py-4'>
                        <li>Help Centers</li>
                        <li>Partners</li>
                        <li>Suggestion</li>
                        <li>Blog</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
            </div>
            {/* INPUT */}
            <div className="flex py-4 px-2 flex-col">
                <h2>Subscribe Us</h2>
                <div className="flex">
                    <input placeholder='NH123@gmail.com' className='bg-transparent border px-2 border-[#004DB3] outline-none'/>
                    <button className='px-4 py-2 font-[700] text-[14px] bg-[#004DB3]'>Send Message</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer