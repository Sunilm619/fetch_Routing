import React from 'react'
import Nav from '../Nav/Nav'

function Notfound() {
    return (
        <div>
            <Nav />
            <div className='flex flex-col items-center'>
                <img className="w-4/12" src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png" alt="not found" />
                <h1 className='text-4xl mt-5'>Home</h1>
            </div>
        </div>)
}

export default Notfound