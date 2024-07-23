import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Audio } from 'react-loader-spinner'

function Bloglist() {
    const [spn, setSpn] = useState(true)
    const [dat, setDat] = useState([])
    const appi = async () => {
        const response = await fetch('https://apis.ccbp.in/blogs')
        const data = await response.json()
        // console.log(data)
        setDat(data)
        setSpn(false)
    };
    useEffect(() => { appi() }, []);
    return (
        <div>
            {spn ? <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            /> :
                dat.map(e => <NavLink to={`/blogs/${e.id}`} ><div key={e.id} className=' border-2 mb-2'>
                    <div className='flex'>
                        <div >
                            <img src={e.image_url} className='w-[30vw]' alt={e.id} />
                        </div>
                        <div >
                            <p>{e.topic}</p>
                            <h1 className='font-bold'>{e.title}</h1>
                            <div className='flex'>
                                <img className='w-1/12' src={e.avatar_url} alt={e.id} />
                                <p>{e.author}</p>
                            </div>
                        </div>
                    </div>
                </div></NavLink>)
            }

        </div >
    )
}

export default Bloglist;