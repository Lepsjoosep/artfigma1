import './App.css'
import LoremTicker from './loremticker.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import { Link } from 'react-router-dom';

function PodcastsPage () {
    return (
        <>
        <Header />
        <div className='p-10'>
            <h1 className='font-bold text-[385px] -mt-40'>PODCAST</h1>
        </div>
        <div>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <h1 className='font-bold text-2xl'>05</h1>
            <img src="./src/Pictures/podcast-cover.png" alt="" className='w-70' />
            <h1 className='font-bold text-4xl w-150 overflow-hidden'>The Problem of today’s cultural development</h1>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Date</h1>
                    <h1 className="text-lg">16. March 2022</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Duration</h1>
                    <h1 className="text-lg">1hr 20min</h1>
                </div>
                <Link to="/PodcastPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>LISTEN</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>
        <hr className='m-10'/>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <h1 className='font-bold text-2xl'>04</h1>
            <img src="./src/Pictures/podcast-cover3.png" alt="" className='w-70' />
            <h1 className='font-bold text-4xl w-150 overflow-hidden'>The hidden messages of <br /> Jack Nielson</h1>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Date</h1>
                    <h1 className="text-lg">16. March 2022</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Duration</h1>
                    <h1 className="text-lg">1hr 20min</h1>
                </div>
                <Link to="/PodcastPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>LISTEN</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>
        <hr className='m-10'/>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <h1 className='font-bold text-2xl'>03</h1>
            <img src="./src/Pictures/podcast-cover2.png" alt="" className='w-70' />
            <h1 className='font-bold text-4xl w-150 overflow-hidden'>Behind the scenes of the street <br /> art culture</h1>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Date</h1>
                    <h1 className="text-lg">16. March 2022</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Duration</h1>
                    <h1 className="text-lg">1hr 20min</h1>
                </div>
                <Link to="/PodcastPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>LISTEN</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>
        <hr className='m-10'/>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <h1 className='font-bold text-2xl'>02</h1>
            <img src="./src/Pictures/podcast-cover4.png" alt="" className='w-70' />
            <h1 className='font-bold text-4xl w-150 overflow-hidden'>The art of movement</h1>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Date</h1>
                    <h1 className="text-lg">16. March 2022</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Duration</h1>
                    <h1 className="text-lg">1hr 20min</h1>
                </div>
                <Link to="/PodcastPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>LISTEN</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div> 
        <hr className='m-10'/>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <h1 className='font-bold text-2xl'>01</h1>
            <img src="./src/Pictures/podcast-cover5.png" alt="" className='w-70' />
            <h1 className='font-bold text-4xl w-150 overflow-hidden'>10 artists your should <br />definitly know</h1>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Date</h1>
                    <h1 className="text-lg">16. March 2022</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Duration</h1>
                    <h1 className="text-lg">1hr 20min</h1>
                </div>
                <Link to="/PodcastPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>LISTEN</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>              
        </div>
        <Footer />
        </>
    )
}

export default PodcastsPage;