import React from 'react'
import Zoom from '../assets/Zoom svg.png'
import Slack from '../assets/slack.png'
import Stripe from '../assets/Group.png'
import Monday from '../assets/monday.com svg.png'
import Dropbox from '../assets/Dropbox svg.png'
const Sponsors = () => {
  return (
    <div className='bg-[#CCDBF0] h-[60px] items-center flex md:h-[100px]'>
        <div className="w-[95%] flex items-center justify-between mx-auto md:w-[65%]">
            <img className='w-[38px] h-[8px] md:w-[129px] md:h-[29px]' src={Zoom}/>
            <img className='w-[38px] h-[16px] md:w-[129px] md:h-[54px]' src={Stripe}/>
            <img className='w-[62px] h-[11px] md:w-[199px] md:h-[36px]' src={Monday}/>
            <img className='w-[47px] h-[12px] md:w-[158px] md:h-[40px]' src={Slack}/>
            <img className='w-[59px] h-[11px] md:w-[199px] md:h-[39px]' src={Dropbox}/>
        </div>
    </div>
  )
}

export default Sponsors