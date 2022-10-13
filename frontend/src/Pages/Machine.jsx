import React from 'react'
import { useState } from 'react';
import Nav from '../Components/Nav'
import axios from 'axios'
import FileBase from 'react-file-base64'

export default function Machine() {
    const [data, setData] = useState({ product_name: '', product_price: '', product_desc: '', product_img: '', product_weight: '' })
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5010/machinesData', data)
            .then(console.log('data submitted'))
            .catch((err) => console.log(`error from posting data in machine ${err.message} `))
    }



    return (
        <div className='w-full h-screen flex flex-col items-center justify-start'>
            <Nav />
            <form onSubmit={handleSubmit} method="post" className='w-full flex flex-col items-center justify-center h-full text-black'>
                <input required onChange={(e) => setData({ ...data, product_name: e.target.value })} type="text" placeholder='product Name' className='text-black w-80 h-10 border-2 border-black rounded m-4 p-2' />
                <input required onChange={(e) => setData({ ...data, product_price: e.target.value })} type="text" placeholder='product Price' className='text-black w-80 h-10 border-2 border-black rounded m-4 p-2' />
                <input required onChange={(e) => setData({ ...data, product_weight: e.target.value })} type="text" placeholder='product weight' className='text-black w-80 h-10 border-2 border-black rounded  m-4 p-2' />
                <input required onChange={(e) => setData({ ...data, product_desc: e.target.value })} type="text" placeholder='product description' className='text-black w-80 h-10 border-2 border-black rounded m-4 p-2' />
                <FileBase required onDone={({ base64 }) => setData({ ...data, product_img: base64 })} type="file" placeholder='product Name' className='text-black w-80 h-10 border-2 flex items-center justify-center border-black rounded m-4 p-2' />
                <button type="submit" className='p-2 m-4 border-2 border-black w-56 h-15 cursor-pointer'>submit</button>
                <button type="reset" className='p-2 m-4 border-2 border-black w-56 h-15 cursor-pointer'>Reset</button>
            </form>
        </div>
    )
}
