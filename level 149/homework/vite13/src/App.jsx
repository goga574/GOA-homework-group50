import { useState } from 'react'


function App() {


  return (
    <>
      <div className='bg-[rgb(245,208,78)] w-full h-screen flex justify-center items-center'>
        <div className="bg-white w-[350px] h-[510px]  rounded-[10px] border p-6 flex flex-col items-start justify-start gap-3">
          <img src="src\assets\illustration-article.svg" alt="" className='w-full  rounded-[10px]' />
          <button className='bg-[rgb(245,208,78)] text-black font-bold border-0 pt-1 pb-1 pl-3 pr-3 rounded-[5px] mt-3'>Learning</button>
          <p className='text-[15px] font-semibold'>Published 21 Dec 2023</p>
          <h2 className='text-[23px] font-extrabold'>HTML % CSS foundations</h2>
          <p className='text-gray-800 leading-[27px]'>These languages are the backbone of every vebsite, defininf structure,content, and presentation</p>
          <div className='flex items-center justify-center gap-3'>
            <img src="src\assets\image-avatar.webp " alt="" className='w-10' />
            <h4 className='font-bold'>Greg Hooper</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
