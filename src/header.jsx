function Header() {
    return (
    <header className=''>
      <div className='flex flex-col'>
      <div className='flex flex-row justify-between p-10 pl-30 pr-30 pb-3'>
        <div>
          <h1 className='text-lg font-bold'>FYRRE MAGAZINE</h1>
        </div>
        <div className='flex flex-row gap-8'>
          <h1>Magazine</h1>
          <h1>Authors</h1>
          <h1 className='pr-2'>Podcast</h1>
          <h1>—</h1>
          <div className='flex items-center flex-row gap-3'>
          <img src="./src/Pictures/Instagram.svg" alt="" className='h-5' />
          <img src="./src/Pictures/Twitter.svg" alt="" className='h-5' />
          <img src="./src/Pictures/youtube.svg" alt="" className='h-7'/>
          <img src="./src/Pictures/Signal.svg" alt="" className='h-5'/>
          </div>
        </div>
      </div>
        <div className='flex justify-center'>
          <hr className='bg-black w-full ml-30 mr-30' />
        </div>
      </div>
    </header>
    );
}
export default Header;