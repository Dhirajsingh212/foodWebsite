import React from 'react'
import './Body.css'
import Slider from 'react-slick'
import Card from '../Card/Card';
import { useState } from 'react';

const Body = () => {

    const settings = {
        arrows:false,
        autoplay:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 3000, 
    };

    var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

    const [prevCount,setPrevCount]=useState(0);
    const [nextCount,setNextCount]=useState(6);
    console.log(prevCount,nextCount);

    return (
        <>
        
        <div className='body'>
            <div className='body_left'>
                <div className='body_left_card'>
                    {arr.slice(prevCount,nextCount).map((e,index)=>{return(<Card key={index} temp={e} image={"https://redcliffelabs.com/myhealth/wp-content/uploads/2022/03/90.jpg"}/>)})}
                </div>
                <div className='body_button'>
                    <button onClick={()=>{
                        if(prevCount===0){
                            return;
                        }
                        setNextCount(prevCount);
                        setPrevCount(prevCount-6);
                    }}>Previous</button>
                    <button onClick={()=>{
                        if(nextCount===arr.length){
                            return;
                        }
                        setPrevCount(prevCount+6);
                        if(nextCount+6>arr.length){
                            setNextCount(arr.length);
                        }else{
                            setNextCount(nextCount+6);
                        }
                    }}>Next</button>
                </div>
            </div>
            <div className='body_right'>
                <Slider {...settings}>
                   <div className='body_right_slider'>
                        <img src='https://i.pinimg.com/736x/08/59/b9/0859b96b707e7f9a46c56da6db88de15.jpg'/>
                   </div>
                   <div className='body_right_slider'>
                        <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-take-out-and-delivery-discount-ad-design-template-26dca84cdbb7ca9ab26aec06b523503a_screen.jpg?ts=1585024659'/>
                   </div>
                   <div className='body_right_slider'>
                        <img src='https://img.freepik.com/free-vector/american-food-flyer-vertical_23-2148751796.jpg'/>
                   </div>
                </Slider>
                <Slider {...settings}>
                   <div className='body_right_slider'>
                        <img src='https://i.pinimg.com/736x/08/59/b9/0859b96b707e7f9a46c56da6db88de15.jpg'/>
                   </div>
                   <div className='body_right_slider'>
                        <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-take-out-and-delivery-discount-ad-design-template-26dca84cdbb7ca9ab26aec06b523503a_screen.jpg?ts=1585024659'/>
                   </div>
                   <div className='body_right_slider'>
                        <img src='https://img.freepik.com/free-vector/american-food-flyer-vertical_23-2148751796.jpg'/>
                   </div>
                </Slider>
            </div>
        </div>
    </>
    )
}

export default Body
