import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Audio } from 'react-loader-spinner'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

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
                dat.map(e => <div key={e.id} className='container border-2 mb-2'>
                    <div className='row'>
                        <NavLink to={`/blogs/${e.id}`} >
                            <div className='flex'>
                                <div className='col-4'>
                                    <img src={e.image_url} className='w-[30vw]' alt={e.id} />
                                </div>
                                <div className='col-8 ml-4'>
                                    <p>{e.topic}</p>
                                    <h5 className='font-bold'>{e.title}</h5>
                                    <div className='flex'>
                                        <img className='w-1/12 rounded-full' src={e.avatar_url} alt={e.id} />
                                        <p>{e.author}</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>)
            }

        </div >
    )
}

export default Bloglist;
//<NavLink to={`/blogs/${e.id}`} >