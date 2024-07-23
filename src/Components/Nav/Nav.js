import React from 'react'

function Nav() {
    return (
        <div className='flex justify-between p-5'>
            <div className='flex  items-center'>
                <img className='w-2/5' src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="wave" /><span className='ml-2'>Wave</span>
            </div>
            <ul className='flex items-center'>
                <li><a href='./'>Home</a></li>
                <li className='mx-4'><a href='./about'>About</a></li>
                <li><a href='./contact'>Contact</a></li>
            </ul>

        </div >

    )
}

export default Nav