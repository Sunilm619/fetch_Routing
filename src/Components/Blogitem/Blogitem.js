import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Blogitem(props) {
    const [lis, setLis] = useState({})
    // console.log(useParams())
    const { id } = useParams()
    let api = `https://apis.ccbp.in/blogs/${id}`
    const fun = async () => {
        const response = await fetch(api)
        const data = await response.json()
        // console.log(data)
        let updtedlist = {
            title: data.title,
            author: data.author,
            id: data.id,
            content: data.content,
            iurl: data.image_url,
            aurl: data.avatar_url
        }
        // console.log(updtedlist)
        setLis(updtedlist)
        console.log(lis)
    }
    useEffect(() => {
        fun()
    }, [])

    return (
        <div className='text-center '>
            <h1 className='text-3xl font-bold'>{lis.title}</h1>
            <div className='flex items-center'>
                <img className='w-1/12 h-4/6 rounded-full' src={lis.aurl} alt="Author Image" />
                <h3 className='ml-3'>{lis.author}</h3>

            </div>
            <img className='w-8/12 mx-auto mt-4' src={lis.iurl} alt="Blog Image" />
            <p className=''>{lis.content}</p>

        </div >
    )
}

export default Blogitem