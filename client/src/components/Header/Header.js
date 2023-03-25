import React from 'react'
import './Header.css'
import Slider from "react-slick";

const Header = () => {
    var settings = {
        autoplay: true,
        arrows:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 1000,
    };
    return (
        <Slider {...settings} className="header">
            <div className='header_slider'>
                <img src='https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591'></img>
            </div>
            <div className='header_slider'>
                <img src='https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg'></img>
            </div>
            <div className='header_slider'>
                <img src='https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg'></img>
            </div>
            <div className='header_slider'>
                <img src='https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1280,c_limit/0817-murray-mancini-dried-tomato-pie.jpg'></img>
            </div>
        </Slider>
    )
}

export default Header
