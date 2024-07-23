import React from 'react'
import Nav from '../Nav/Nav'
import Bloglist from '../Bloglist/Bloglist'

function Home(props) {
    // console.log(props)
    return (
        <div>
            <Nav />
            <div className='flex flex-col items-center'>
                <img className='w-1/12' src="https://assets.ccbp.in/frontend/react-js/profile-img.png" alt="profile" />
                <h1 className='text-4xl mt-5'>Home</h1>
                <p>Software Developer</p>
            </div>
            <Bloglist />
        </div>
    )
}

export default Home