import './App.css'
import LoremTicker from './loremticker.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import MagazinePostArticles from './MagazinePostArticles.jsx'
import { Link } from 'react-router-dom';

function MagazinePost() {
    return (
        <>
        <Header />
        <div className='flex justify-between p-10 items-center'>
            <Link to="/magazine"><div className='flex flex-row items-center'>
                <img src="./src/Pictures/arrow.png" alt="" className='rotate-180 h-6'/>
                <h1 className='font-bold text-lg'>GO BACK</h1>
            </div></Link>
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
        <div className='flex flex-row justify-center pl-50 pr-50 gap-15 pt-20'>
            <div>
                <div className='flex flex-row items-center'>
                    <img src="./src/Pictures/MagazinePictures/Jakob.jpg" alt="" className='w-25 rounded-full aspect-square object-cover'/>
                    <h1 className="font-bold text-4xl w-50 overflow-hidden pl-5">Jakob Gronberg</h1>
                </div>
                <hr className='h-1 w-100 mt-10' />
                <div>
                    <div className='flex flex-row justify-between pt-5 w-100'>
                        <h1 className='font-bold text-xl'>Date</h1>
                        <h1 className='text-lg'>16. March 2022</h1>
                    </div>
                    <div className='flex flex-row justify-between w-100 pt-5'>
                        <h1 className='font-bold text-xl'>Read</h1>
                        <h1 className='text-lg'>2 Min</h1>
                    </div>
                    <div className='flex flex-row justify-between w-100 pt-5'>
                        <h1 className='font-bold text-xl'>Share</h1>
                        <div className='flex flex-row gap-2'>
                            <img src="./src/Pictures/Instagram.svg" alt="" className='w-5' />
                            <img src="./src/Pictures/Twitter.svg" alt="" className='w-5' />
                            <img src="./src/Pictures/youtube.svg" alt="" className='w-5' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-180'>
                <h1 className='text-2xl/11 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</h1>
                <h1 className='text-lg/8 pt-7 w-170'>Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.</h1>
                <h1 className='text-lg/8 pt-7 w-171'>Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.</h1>
                <hr className='h-1 w-171 mt-15' />
                <div className='flex flex-row gap-5'>
                    <h1 className='font-bold text-9xl overflow-hidden pt-6'>"</h1>
                    <div>
                        <h1 className='font-bold text-5xl w-140 overflow-hidden pt-10'>The greatest glory in living lies not in never falling, but in rising every time we fall.</h1>
                        <h1 className='pt-10'>Nelson Mandela</h1>
                    </div>
                </div>
                <hr className='h-1 w-171 mt-10' />
                <h1 className='text-2xl/11 font-semibold pt-15 w-170'>Est pellentesque elit ullamcorper dignissim. Consectetur a erat nam at. Blandit libero volutpat sed cras ornare arcu. Iaculis urna id volutpat lacus laoreet. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</h1>
                <h1 className='text-lg/8 pt-7 w-171'>Vitae turpis massa sed elementum tempus egestas sed. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Viverra justo nec ultrices dui sapien eget. At risus viverra adipiscing at in tellus integer feugiat. Elementum eu facilisis sed odio morbi quis commodo. Arcu cursus vitae congue mauris rhoncus aenean. Auctor elit sed vulputate mi sit amet mauris commodo quis. Lectus sit amet est placerat in egestas erat imperdiet sed. Eu mi bibendum neque egestas congue quisque. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Pharetra vel turpis nunc eget lorem. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. In metus vulputate eu scelerisque felis imperdiet. Elementum pulvinar etiam non quam lacus suspendisse. Sem fringilla ut morbi tincidunt augue. Id venenatis a condimentum vitae sapien. Varius quam quisque id diam vel.</h1>
                <h1 className='text-lg/8 pt-7 w-170'>Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Aliquam nulla facilisi cras fermentum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Neque vitae tempus quam pellentesque nec. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Mattis enim ut tellus elementum sagittis. In fermentum et sollicitudin ac orci phasellus. Est sit amet facilisis magna etiam tempor orci. Lacinia at quis risus sed vulputate odio ut. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Aenean vel elit scelerisque mauris pellentesque. Gravida arcu ac tortor dignissim. Ac tortor dignissim convallis aenean.</h1>
            </div>
        </div>
        <div>
            <hr className='ml-10 mr-10 mt-50' />
            <div className='flex flex-row justify-between p-10 pt-20 items-center'>
                <h1 className='text-9xl font-bold overflow-hidden'>LATEST POSTS</h1>
                <div className='flex flex-row gap-2'>
                    <h1 className='text-lg font-bold'>SEE ALL</h1>
                    <img src="./src/Pictures/arrow.png" alt="" />
                </div>
            </div>
        <MagazinePostArticles />
        </div>
        <Footer />
        </>
    )
}

export default MagazinePost;