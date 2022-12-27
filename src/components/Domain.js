import React from 'react';
import { AiFillEye } from 'react-icons/ai';

const Domain = () => {
  return (
    <div className='my-20 py-10 w-screen px-10'>
      <div className='container mx-auto  grid place-items-center max-w-5xl '>
     
        <h1 className='text-slate-800 font-serif text-center text-4xl'>Here are our registered domain names</h1>
        <p className='text-slate-700 font-mono text-2xl text-center relative top-3 '>After you complete the payment process you will get an NFT, which you will find after clicking the domain name</p>
      </div>
      <div className='container mt-10  mx-auto  grid place-items-center'>
        <div className='flex justify-around bg-slate-400 items-center shadow-lg rounded-md px-10 py-5 xl:w-2/5 md:w-2/4 my-3'>
           <p className='w-1/3 text-center' style={{fontFamily:'Montserrat, sans-serif',letterSpacing:"2px"}}>eleyy.eth</p>&nbsp;&nbsp;
           <a className='hover:underline w-1/3 text-center' style={{fontFamily:'Montserrat, sans-serif'}} href=''>0xKLDJ...JDO8</a>&nbsp;&nbsp;
           <a href='' className='text-3xl w-1/3 grid place-content-center hover:text-gray-800'><AiFillEye/></a>
        </div>

        <div className='flex justify-around bg-slate-400 items-center shadow-lg rounded-md px-10 py-5 xl:w-2/5 md:w-2/4 '>
           <p className='w-1/3 text-center' style={{fontFamily:'Montserrat, sans-serif',letterSpacing:"2px"}}>eleyy.eth</p>&nbsp;&nbsp;
           <p className=' w-1/3 text-center' style={{fontFamily:'Montserrat, sans-serif'}} href=''>25.0ETH</p>&nbsp;&nbsp;
           <button className='rounded text-center  grid place-content-center px-5 py-2 w-1/3 bg-slate-900 text-gray-300  hover:bg-gray-800'>Buy Now</button>
        </div>
        
      </div>
    </div>
  )
}

export default Domain