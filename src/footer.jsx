import NewsTicker from "./ticker";

function Footer() {
    return (
           <footer className='mt-50 bg-black'>
                <NewsTicker />
                <div className='pt-40 pl-30 pr-30 flex flex-row items-center justify-between'>
                  <h1 className='font-bold text-7xl w-200 overflow-hidden text-white'>DESIGN NEWS TO YOUR INBOX</h1>
                  <div className='flex flex-row gap-3'>
                    <input type="email" placeholder="Email" className="bg-white text-black text-lg h-13 w-80 pl-3" />
                    <button className='bg-white h-13 w-30 font-semibold'>SIGN UP</button>
                  </div>
                </div>
                <div className='p-30 flex justify-between'>
                  <h1 className='font-bold text-2xl text-white'>FYRRE MAGAZINE</h1>
                  <div className='flex flex-row gap-80 pt-10'>
                    <div className='text-white text-lg flex flex-col gap-5'>
                      <h1>Art</h1>
                      <h1>Design</h1>
                      <h1>Architecture</h1>
                    </div>
                      <div className='text-white text-lg flex flex-col gap-5'>
                      <h1>Magazine</h1>
                      <h1>Podcast</h1>
                      <h1>Authors</h1>
                    </div>
                      <div className='text-white text-lg flex flex-col gap-5'>
                      <h1>Styleguide</h1>
                      <h1>Licensing</h1>
                      <h1>Changelog</h1>
                    </div>
                  </div>
                </div>
                <div className='text-white p-30 flex justify-between items-center'>
                  <h1>© Made by Pawel Gola -  Powered by Webflow</h1>
                  <div className='flex flex-row gap-3'>
                    <img src="./src/Pictures/instagramwhite.svg" alt="" className='' />
                    <img src="./src/Pictures/twitterwhite.svg" alt="" />
                    <img src="./src/Pictures/youtubewhite.svg" alt="" />
                    <img src="./src/Pictures/signalwhite.svg" alt="" />
                  </div>
                </div>
            </footer>
    );
}
export default Footer;