import React, { useState } from 'react'
import '../App.css'
import Loop from '../assets/loop.png'
import Waves from '../assets/yellowwave.png'
import blob1 from '../assets/bubble1.png'
import blob2 from '../assets/bubble2.png'
import Dot from '../assets/yellow.png'
const Questions = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
    const data =[
        {
            question: 'Is there a free trial available',
            answer: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
        },
        {
            question: 'Can I change my plan later?',
            answer: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
        },
        {
            question: 'Are the course lifetime?',
            answer: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
        },
        {
            question: 'Do I get certfied after taking courses?',
            answer: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
        },
        {
            question: 'How do I reach out to mentors?',
            answer: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
        },
        {
            question: 'Do we get job after taking courses?',
            answer: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
        },

    ]
  return (
    <div className="relative bg-white py-4 w-full">

        <img className='absolute z-[1] left-1 w-[40px] top-[22%]' src={Waves}/>
        <img className='absolute z-[1] hidden bg-white right-1 w-[100px] top-[1%] md:flex' src={blob1}/>
        <img className='absolute z-[1] hidden bg-white left-1 w-[100px] bottom-[1%] md:flex' src={blob2}/>
        <img className='absolute z-[1] right-[5%] w-[20px] top-[8%]' src={Loop}/>
        <img className='absolute z-[1] hidden bottom-10 right-2 md:flex' src={Dot}/>

        <div className='flex flex-col mx-auto items-center w-[95%] mt-[4%] md:w-[75%]'>

            {/* HEADER */}
            <h1 className='text-center'>Frequently Asked Questions</h1>
            <p className='md:w-[45%] text-center'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>

            {/* ACCORDION */}
            <div className="w-[80%] flex py-4 mt-2 flex-col">
                {
                    data.map((item, i)=> (
                        <div className="flex my-3 border-b-2 py-8 flex-col">
                            <div onClick={()=>toggle(i)} className="flex justify-between items-center cursor-pointer">
                                <h2 className={`${selected === i ? 'text-[#004DB3]' : ""} text-[16px] md:text-[24px]`}>{item.question}</h2>
                                <span className='text-[24px] '>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                <p className=''>{item.answer}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Questions