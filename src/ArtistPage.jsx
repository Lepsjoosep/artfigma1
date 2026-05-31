import './App.css'
import LoremTicker from './loremticker.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import { Link } from 'react-router-dom'

function ArtistPage() {
  return (
    <>
      <Header />
        <div className='flex justify-between p-10 items-center'>
            <Link to="/AuthorsPage"><div className='flex flex-row items-center'>
                <img src="./src/Pictures/arrow.png" alt="" className='rotate-180 h-6'/>
                <h1 className='font-bold text-lg'>GO BACK</h1>
            </div></Link>
            <h1 className='flex font-bold text-3xl overflow-hidden'>AUTHOR</h1>
        </div>
        <div className='flex flex-row justify-center pl-50 pr-50 gap-15 pt-20'>
            <div>
                <img src="./src/Pictures/Louise.png" alt="" className='w-90' />
                <hr className='w-90 mt-10' />
                <div>
                    <div className='flex flex-row justify-between w-90 pt-5'>
                        <h1 className='font-bold text-xl'>Share</h1>
                        <div className='flex flex-row gap-2'>
                            <img src="./src/Pictures/Instagram.svg" alt="" className='w-5' />
                            <img src="./src/Pictures/Twitter.svg" alt="" className='w-5' />
                            <img src="./src/Pictures/youtube.svg" alt="" className='w-5' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-9xl overflow-hidden w-220 '>LOUISE JENSEN</h1>
                <h1 className='text-2xl/11 font-semibold w-210 pt-10 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</h1>
                <h1 className='text-lg/8 w-210'>Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.</h1>
            </div>
        </div>
        <div>
            <hr  className='m-10 mt-30'/>
        </div> 
            <div className='pl-30 pr-30'>
      <div className='flex flex-row justify-between'>
        <h1 className='font-bold text-7xl h-30'>Articles by Louise Jensen</h1>
      </div>
      <div className='flex flex-row'>
      <div className='flex flex-row items-center gap-10 border-1 p-10 w-210'>
        <img src="./src/Pictures/thebest.jpg" alt="" className='h-50 w-50 object-cover object-[70%_center]'/>
        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-4xl h-12'>The best art museums</h1>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Date</h1>
            <h1>16. March 2022</h1>
          </div>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Read</h1>
            <h1>10 Min</h1>
          </div>
        </div>
        </div>
      </div>
      <div className='flex flex-row items-center gap-10 border-1 p-10 w-210'>
        <img src="./src/Pictures/MagazinePictures/an-indestructible.jpg" alt="" className='h-50 w-50 object-cover object-[70%_center]' />
        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-4xl h-12'>An inde­struc­tible hope</h1>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Date</h1>
            <h1>16. March 2022</h1>
          </div>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Read</h1>
            <h1>10 Min</h1>
          </div>
        </div>
        </div>
      </div>
      </div>
      <div className='flex flex-row'>
      <div className='flex flex-row items-center gap-10 border-1 p-10 w-210'>
        <img src="./src/Pictures/MagazinePictures/The-chains.jpg" alt="" className='h-50 w-50 object-cover object-[50%_10%] translate' />
        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-4xl h-12'>The chains of our lives</h1>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Date</h1>
            <h1>16. March 2022</h1>
          </div>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Read</h1>
            <h1>10 Min</h1>
          </div>
        </div>
        </div>
      </div>
      <div className='flex flex-row items-center gap-10 border-1 p-10 w-210'>
        <img src="./src/Pictures/MagazinePictures/Keep-smiling.jpg" alt="" className='h-50 w-50 object-cover object-[70%_center]' />
        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-4xl h-12'>Keep on smiling</h1>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Date</h1>
            <h1>16. March 2022</h1>
          </div>
          <div className='flex flex-row gap-3'>
            <h1 className='font-bold'>Read</h1>
            <h1>10 Min</h1>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
        <Footer />       
        </>
    )
}

export default ArtistPage;