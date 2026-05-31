import './App.css'
import LoremTicker from './loremticker.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import { Link } from 'react-router-dom'

function AuthorsPage() {
  return (
    <>
      <Header />
    <div className='p-10'>
        <h1 className='font-bold text-[379px] -mt-40'>AUTHORS</h1>
    </div>
    <div>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <div className='flex flex-row items-center gap-10'>
            <img src="./src/Pictures/MagazinePictures/Jakob.jpg" alt="" className='w-50 rounded-full aspect-square object-cover' />
            <h1 className='font-bold text-5xl overflow-hidden h-15'>Jakob Gronberg</h1>              
            </div>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Job</h1>
                    <h1 className="text-lg">Artist</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>City</h1>
                    <h1 className="text-lg">Berlin</h1>
                </div>
                <Link to="/ArtistPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>ABOUT</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>
        <hr className='m-10'/>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <div className='flex flex-row items-center gap-10'>
            <img src="./src/Pictures/Louise.png" alt="" className='w-50 rounded-full aspect-square object-cover' />
            <h1 className='font-bold text-5xl overflow-hidden h-15'>Louise Jensen</h1>              
            </div>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Job</h1>
                    <h1 className="text-lg">Artist</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>City</h1>
                    <h1 className="text-lg">Berlin</h1>
                </div>
                <Link to="/ArtistPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>ABOUT</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>
        <hr className='m-10'/>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <div className='flex flex-row items-center gap-10'>
            <img src="./src/Pictures/anne.png" alt="" className='w-50 rounded-full aspect-square object-cover' />
            <h1 className='font-bold text-5xl overflow-hidden h-15'>Anne Henry</h1>              
            </div>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Job</h1>
                    <h1 className="text-lg">Artist</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>City</h1>
                    <h1 className="text-lg">Berlin</h1>
                </div>
                <Link to="/ArtistPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>ABOUT</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>
        <hr className='m-10'/>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <div className='flex flex-row items-center gap-10'>
            <img src="./src/Pictures/Anna.png" alt="" className='w-50 rounded-full aspect-square object-cover' />
            <h1 className='font-bold text-5xl overflow-hidden h-15'>Anna Nielsen</h1>              
            </div>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Job</h1>
                    <h1 className="text-lg">Artist</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>City</h1>
                    <h1 className="text-lg">Berlin</h1>
                </div>
                <Link to="/PagePodcast"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>ABOUT</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>
        <hr className='m-10'/>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <div className='flex flex-row items-center gap-10'>
            <img src="./src/Pictures/Jane.png" alt="" className='w-50 rounded-full aspect-square object-cover' />
            <h1 className='font-bold text-5xl overflow-hidden h-15'>Jane Cooper</h1>              
            </div>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Job</h1>
                    <h1 className="text-lg">Artist</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>City</h1>
                    <h1 className="text-lg">Berlin</h1>
                </div>
                <Link to="/ArtistPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>ABOUT</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>
        <hr className='m-10'/>
        <div className='flex flex-row items-center justify-between  pl-10 pr-10'>
            <div className='flex flex-row items-center gap-10'>
            <img src="./src/Pictures/Cristofer.png" alt="" className='w-50 rounded-full aspect-square object-cover' />
            <h1 className='font-bold text-5xl overflow-hidden h-15'>Cristofer Vaccaro</h1>              
            </div>
            <div className='flex flex-row gap-20'>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>Job</h1>
                    <h1 className="text-lg">Artist</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-lg'>City</h1>
                    <h1 className="text-lg">Berlin</h1>
                </div>
                <Link to="/ArtistPage"><div className='flex flex-row gap-3'>
                    <h1 className='font-bold text-lg w-16'>ABOUT</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div></Link>
            </div>
        </div>                 
        </div>
        <Footer />
        </>
    )
}

export default AuthorsPage