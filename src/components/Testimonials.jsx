import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Pic from '../assets/profile.png'
import Pic2 from '../assets/profile2.png'
import Pic3 from '../assets/profile3.png'
import Pic4 from '../assets/user1.png'
import Pic5 from '../assets/user2.png'
import Pic6 from '../assets/user3.png'
import Pic7 from '../assets/user4.png'

const Testimonials = () => {
    const testimonials = [
        {
            comment: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            name: "Bella Moon",
            title: "Product Designer",
            pic: Pic
        },
        {
            comment: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            name: "Bella Moon",
            title: "Product Designer",
            pic: Pic2
        },
        {
            comment: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            name: "Bella Moon",
            title: "Product Designer",
            pic: Pic3
        },
        {
            comment: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            name: "Bella Moon",
            title: "Product Designer",
            pic: Pic4
        },
        {
            comment: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            name: "Bella Moon",
            title: "Product Designer",
            pic: Pic5
        },
        {
            comment: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            name: "Bella Moon",
            title: "Product Designer",
            pic: Pic6
        },
        {
            comment: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            name: "Bella Moon",
            title: "Product Designer",
            pic: Pic7
        },

    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };      
      return (
        <div className='flex flex-col items-center px-1 mt-[4%]'>
        <h1 className='text-center py-2'> What Our Clients Are Saying </h1>
        <p className='text-center md:w-[35%]'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>
        <Slider className='w-full py-12' {...settings}>
            {
                testimonials.map((item)=>(
                    <div>
                    <div className='py-8 rounded-[24px] mx-2 bg-white px-4'>
                        <p>{item.comment}</p>
                        <div className='flex gap-x-2 items-center py-2'>
                            <img src={item.pic}/>
                            <div className="flex flex-col">
                                <p className='font-[700] text-black'>{item.name}</p>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </div>
                  </div>        
                ))
            }


        </Slider>
      </div>)}

export default Testimonials