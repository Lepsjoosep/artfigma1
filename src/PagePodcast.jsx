import './App.css'
import LoremTicker from './loremticker.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import { Link } from 'react-router-dom'
import Podcasts2 from './podcasts2.jsx'

function PagePodcast() {
  return (
    <>
      <Header />
        <div className='flex justify-between p-10 items-center'>
            <Link to="/PodcastsPage"><div className='flex flex-row items-center'>
                <img src="./src/Pictures/arrow.png" alt="" className='rotate-180 h-6'/>
                <h1 className='font-bold text-lg'>GO BACK</h1>
            </div></Link>
            <h1 className='flex font-bold text-3xl overflow-hidden'>PODCAST</h1>
        </div>
        <div className='flex flex-row justify-center pl-50 pr-50 gap-15 pt-20'>
            <div>
                <img src="./src/Pictures/podcast-cover.png" alt="" className='w-90' />
                <div className='flex flex-row items-center justify-between w-90 pt-10 pb-10'>
                    <h1 className='font-bold text-2xl'>Listen On</h1>
                    <div className='flex flex-row items-center gap-5'>
                        <img src="./src/Pictures/Spotify.svg" alt="" className='w-6'/>
                        <img src="./src/Pictures/Apple.svg" alt=""  className='w-6'/>
                        <img src="./src/Pictures/Soundcloud.svg" alt=""  className='w-6'/>
                    </div>
                </div>
                <hr className='w-90' />
                                <div>
                    <div className='flex flex-row justify-between pt-5 w-90'>
                        <h1 className='font-bold text-xl'>Date</h1>
                        <h1 className='text-lg'>16. March 2022</h1>
                    </div>
                    <div className='flex flex-row justify-between w-90 pt-5'>
                        <h1 className='font-bold text-xl'>Read</h1>
                        <h1 className='text-lg'>2 Min</h1>
                    </div>
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
                <h1 className='font-bold text-2xl'>EPISODE 01</h1>
                <h1 className='font-bold text-9xl overflow-hidden w-220 '>SAVE THE WORLD FROM OURSELVES!</h1>
                <h1 className='text-2xl/11 font-semibold w-210 pt-10 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</h1>
                <h1 className='text-lg/8 w-210'>Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.</h1>
                <h1 className='text-lg/8 pt-7 w-210'>Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.</h1>
                <hr className='h-1 w-210 mt-15' />
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-9xl overflow-hidden pt-6'>"</h1>
                    <div>
                        <h1 className='font-bold text-5xl w-170 overflow-hidden pt-10'>The greatest glory in living lies not in never falling, but in rising every time we fall.</h1>
                        <h1 className='pt-10'>Nelson Mandela</h1>
                    </div>
                </div>
                <hr className='h-1 w-210 mt-10' />
                <h1 className='text-lg/8 pt-7 w-210'>Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.</h1>
                <h1 className='text-lg/8 pt-7 w-210'>Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.</h1>
            </div>
        </div>
        <div>
            <hr  className='m-10 mt-30'/>
            <Podcasts2 />
        </div> 
      <Footer />
    </>
  )
}

export default PagePodcast