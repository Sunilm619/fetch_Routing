import React from 'react'
import Nav from '../Nav/Nav'

function About() {
    return (
        <div>
            <Nav />
            <div className='flex flex-col items-center'>
                <img src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png" alt="about" />
                <h1 className='text-4xl mt-5'>About Us</h1>
            </div>
        </div>)
}

export default About