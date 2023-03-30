import React from 'react'
import '../App.css'
import {BsStar} from 'react-icons/bs'
import {SlClock} from 'react-icons/sl'
import {VscBook} from 'react-icons/vsc'
import User1 from '../assets/user1.png'
import User2 from '../assets/user2.png'
import User3 from '../assets/user3.png'
import User4 from '../assets/user4.png'
import User5 from '../assets/user5.png'
import User6 from '../assets/user6.png'
import Audience from '../assets/audience.png'
import Black from '../assets/black.png'
import Code from '../assets/code.png'
import Board from '../assets/board.png'
import Chart from '../assets/chart.png'
import Star from '../assets/star.png'

import Design from '../assets/design.png'

const PopularCourses = () => {
    const Cards = [
        {
            pic: Design,
            tag: 'Design',
            header: 'Introduction to user research in UX Design',
            brackets: '32.7k+',
            time: '23hrs 50mins',
            lessons: 15,
            authourPic: User1,
            authorName: 'Leonard Victor',
            price: 15.00
        },
        {
            pic: Audience,
            tag: 'Marketing',
            header: 'Introduction to new marketing audience',
            brackets: '8.7k+',
            time: '22hrs 30mins',
            lessons: 22,
            authourPic: User2,
            authorName: 'Jeffery Williams',
            price: 32.00
        },
        {
            pic: Black,
            tag: 'Development',
            header: 'Introduction to HTML, CSS & Bootstrap',
            brackets: '12.7k+',
            time: '45hrs 50mins',
            lessons: 55,
            authourPic: User3,
            authorName: 'Claretta Mason',
            price: 55.00
        },
        {
            pic: Code,
            tag: 'Development',
            header: 'Introduction to javascript, Git & GitHub',
            brackets: '32.7k+',
            time: '30hrs 50mins',
            lessons: 22,
            authourPic: User4,
            authorName: 'Jessica Duke',
            price: 45.00
        },
        {
            pic: Board,
            tag: 'Marketing',
            header: 'Introduction to outroom  marketing analysis',
            brackets: '4.7k+',
            time: '33hrs 50mins',
            lessons: 26,
            authourPic: User5,
            authorName: 'Samuel Jacobs',
            price: 25.00
        },
        {
            pic: Chart,
            tag: 'Marketing',
            header: 'Introduction to live  marketing analysis',
            brackets: '15.7k+',
            time: '10hrs 50mins',
            lessons: 32,
            authourPic: User6,
            authorName: 'Adam Smith',
            price: 25.00
        },

    ]
  return (
        <div className="flex w-full relative">
            <img className='absolute w-[30px] left-5 top-[1] md:left-5 md:top-[10%]' src={Star}/>

            <div className='flex  flex-col items-center py-4 w-[95%] mx-auto mt-[4%] md:w-[85%]'>
                <h1 className='text-center py-2 '>Browse Our Popular Courses</h1>
                <p className='text-center py-2 md:w-[700px]'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard definition. Wile There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>
                <div className="flex items-center py-8 w-full justify-between md:w-auto md:gap-x-20">
                    <p className='text-[#004DB3] rounded-[4px] px-3 py-2 bg-white font-[700]'>All Categories</p>
                    <p>Design</p>
                    <p>Development</p>
                    <p>Marketing</p>
                </div>
                <div className="flex items-center w-full flex-col justify-between md:flex-row md:flex-wrap">
                    {/* CARD */}
                    {
                        Cards.map((card, index)=> (
                            <div key={index} className="flex mx-auto w-[95%] my-4 flex-col bg-white p-4 rounded-[4px] md:w-[480px]">
                                <img src={card.pic}/>
                                <div className="flex w-full items-center py-4 justify-between">
                                    <p className='text-[#004DB3] px-4 rounded-[16px] font-[700] bg-[#d7e0f1]'>{card.tag}</p>
                                    <div className="flex items-center gap-x-2">
                                        <p className='flex items-center'>4.7K<BsStar/></p>
                                        <p>({card.brackets})</p>
                                    </div>
                                </div>
                                <h3 className=' py-4 '>{card.header}</h3>
                                <div className="flex justify-between">
                                    <p className='flex items-center gap-x-2'><SlClock/> {card.time}</p>
                                    <p className='flex items-center gap-x-2'><VscBook/> {card.lessons} Lessons</p>
                                </div>
                                <div className='flex py-4  justify-between'>
                                    <div className="flex gap-x-2 items-center">
                                        <img src={card.authourPic}/>
                                        <p className='font-[700]'>{card.authorName}</p>
                                    </div>
                                    <p className='text-[#004BD3] font-[700]'>${card.price}.00</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className='bg-[#004DB3] text-white px-8 font-[700] mt-4 py-4 rounded-[4px]'>Explore All Courses</button>
            </div>
        </div>
  )
}

export default PopularCourses