import './App.css'
import LoremTicker from './loremticker.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'

function MagazinePost() {
    return (
        <>
        <Header />
        <div className='flex justify-between p-10 items-center'>
            <div className='flex flex-row items-center'>
                <img src="./src/Pictures/arrow.png" alt="" className='rotate-180 h-6'/>
                <h1 className='font-bold text-lg'>GO BACK</h1>
            </div>
            <h1 className='flex font-bold text-3xl overflow-hidden'>MAGAZINE</h1>
        </div>
        <div className='flex flex-row pl-10 pr-20 justify-between'> 
            <h1 className='text-9xl font-bold w-160 overflow-hidden'>HOPE DIES LAST</h1>
            <h1 className='text-lg font-semibold w-160'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</h1>
        </div>
        <div>
            <div className='flex flex-row gap-4 pl-10 pt-30'>
                <div className='flex flex-row gap-2'>
                    <h1 className='font-bold'>Text</h1>
                    <h1>Jakob Gronberg</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <h1 className='font-bold'>Date</h1>
                    <h1 className="">16. March 2022</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <h1 className='font-bold'>Read</h1>
                    <h1 className="">2 Min</h1>
                </div>
            </div>
            <img src="./src/Pictures/Hopedieslast.jpg" alt="" className='p-10'/>
        </div>
        <Footer />
        </>
    )
}

export default MagazinePost;