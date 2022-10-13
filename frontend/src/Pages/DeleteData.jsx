import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import Nav from '../Components/Nav'

export default function DeleteData() {
  const [data, setData] = useState('');
  const [id, setId] = useState('');

  const PostmachineId = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5010/machineIdSearch', {id : id})
      .then( console.log('machine id posted '))
      
    } catch (error) {
      console.log('error in posting machine id ' + error.message);
    }
  }
  const getmachineData = async (e) => 
  {
    e.preventDefault();
    try {
      axios.get('http://localhost:5010/machineData')
      .then(res => res.data)
      .then(data => setData(data))
    } catch (error) {
      console.log('error from getting machine Data' + error.message);
    }
  }

  const deletemachineData = async (e) => 
  {
    e.preventDefault();
    try {
      axios.delete('http://localhost:5010/deletemachineData')
      .then('Deleted Successfull')
    } catch (error) {
      console.log("error in deleting machine Data " +  error.message);
    }
  }

 


  // ^ gainer logic
  const getgainerData = async (e) => 
  {
    e.preventDefault();
    try {
      axios.get('http://localhost:5010/getGainerData')
      .then(res => res.data)
      .then(data => setData(data))
    } catch (error) {
      console.log('error from getting gainer Data' + error.message);
    }
  }

  const deletegainerData = async (e) => 
  {
    e.preventDefault();
    try {
      axios.delete('http://localhost:5010/deleteGainerData')
      .then('Deleted Successfull')
    } catch (error) {
      console.log("error in deleting gainer Data " +  error.message);
    }
  }

  // ^ assessories logic
  const getassosiresData = async (e) => 
  {
    e.preventDefault();
    try {
      axios.get('http://localhost:5010/getassessoriesData')
      .then(res => res.data)
      .then(data => setData(data))
    } catch (error) {
      console.log('error from getting assessories Data' + error.message);
    }
  }

  const deleteassessoriesData = async (e) => 
  {
    e.preventDefault();
    try {
      axios.delete('http://localhost:5010/deleteassessoriesData')
      .then('Deleted Successfull')
    } catch (error) {
      console.log("error in deleting assessories data " +  error.message);
    }
  }

  return (
    <div className='w-full h-auto '>
      <Nav />
      <div className='flex-col flex items-center justify-center w-full h-full p-4'>
        <form onSubmit={PostmachineId} method="post" className='flex flex-col items-center justify-center p-4 m-2'>
          <input onChange={(e) => setId(e.target.value)} value={id} type="text" placeholder='input ID to get Data from machine' className='text-black w-80 h-10 border-2 border-black rounded m-4 p-2' />
          <button className='p-2 m-4 border-2 border-black w-96 h-15 cursor-pointer' type='submit'>submit machine data id</button>
        </form>
        <button onClick={getgainerData} className='p-2 m-4 border-2 border-black w-96 h-15 cursor-pointer'>Get ID DATA from Gainers</button>
        <button onClick={getassosiresData} className='p-2 m-4 border-2 border-black w-96 h-15 cursor-pointer'>Get ID DATA from Assessories</button>
        <button onClick={getmachineData} className='p-2 m-4 border-2 border-black w-96 h-15 cursor-pointer'>Get ID DATA from machines</button>
        <h1 className='p-2 m-3'>{data.product_name}</h1>
        <h1 className='p-2 m-3'>{data.product_price}</h1>
        <h1 className='p-2 m-3'>{data.product_price}</h1>
        <h1 className='p-2 m-3'>{data.product_weight}</h1>
        <img src={data.product_img} alt="none" className='w-96 h-96' />

        <button onClick={deletemachineData} className='p-2 m-4 border-2 border-black w-96 h-15 cursor-pointer'>Delete ID DATA from machines</button>
        <button onClick={deletegainerData} className='p-2 m-4 border-2 border-black w-96 h-15 cursor-pointer'>Delete ID DATA from Gainers</button>
        <button onClick={deleteassessoriesData} className='p-2 m-4 border-2 border-black w-96 h-15 cursor-pointer'>Delete ID DATA from Assessories</button>

      </div>
    </div>
  )
}
