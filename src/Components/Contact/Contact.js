import React from 'react'
import Nav from '../Nav/Nav'

function Contact() {
    return (
        <div>
            <Nav />
            <div className='flex flex-col items-center'>
                <img src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png" alt="contact" />
                <h1 className='text-4xl mt-5'>Contact</h1>
            </div>
        </div>)
}

export default Contact