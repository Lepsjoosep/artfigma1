import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className=''>
      <div className='flex flex-col'>
      <div className='flex flex-row justify-between p-10 pb-3'>
        <div>
          <h1 className='text-lg font-bold'>FYRRE MAGAZINE</h1>
        </div>
        <div className='flex flex-row gap-8'>
          <h1>Magazine</h1>
          <h1>Authors</h1>
          <h1>Podcast</h1>
          <h1>—</h1>
          <img src="./src/Pictures/Instagram.svg" alt="" className='' />
          <img src="./src/Pictures/Twitter.svg" alt="" />
          <img src="./src/Pictures/YouTube.svg" alt="" />
          <img src="./src/Pictures/Signal.svg" alt="" />
        </div>
      </div>
        <div className='flex justify-center'>
          <hr className='bg-black w-full ml-10 mr-10' />
        </div>
      </div>
    </header>
    <div className='flex justify-center'>
      <h1 className='font-bold text-[280px]'>ART & LIFE</h1>
    </div>
    <div className='flex flex-row bg-black text-white p-4 pr-0 m-10 mt-0 gap-10 flex align-center text-lg'>
      <h1 className='font-bold text-xl'>NEWS TICKER+++</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit+++</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit+++</h1>
      <h1>Lorem ipsum dolor sit </h1>
    </div>
    <div className='flex flex-row p-10'>
      <h1 className='font-bold text-8xl w-200 overflow-y-hidden'>DONT'T CLOSE YOUR EYES</h1>
      <div className='flex flex-col gap-20'>
        <h1 className='w-175 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</h1>
        <div className='flex flex-row gap-5 align-center'>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Text</h1>
            <h1>Jakob Gronberg</h1> 
          </div>
          <div className='flex flex-row   gap-3'>
          <h1 className='font-bold'>Date</h1>
          <h1>16.March 2022</h1>            
          </div>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Duration</h1>
            <h1>1 Min</h1>
          </div>
          <button className='w-15 h-8 border-1 rounded-xl ml-30'>LABEL</button>
        </div>
        </div>
    </div>
    <img src="./src/Pictures/art.jpg" alt="art" className='p-10' />
    </>
  )
}

export default App
