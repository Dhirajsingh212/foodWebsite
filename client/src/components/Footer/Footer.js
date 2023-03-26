import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>© 2023 Foodbar. All rights reserved.</div>
            <div className='footer_icon'>
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-square-facebook"></i>
            </div>
        </div>
    )
}

export default Footer
