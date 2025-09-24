import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data =  useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchaudhary')
    //     .then(response=> response.json())
    //     .then(data=> {
    //         console.log("data", data);
    //         setData(data)
            
    //     })
    // }, [])
    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl '>
            Github Followers: {data?.followers} 
            <img src={data?.avatar_url} alt='Github image' width={300}/>
        </div>
        
    )
}

export default Github
export const GithubInfoLoader = async ()=>{
   const response = await fetch('https://api.github.com/users/hiteshchaudhary')
   return response.json()
}