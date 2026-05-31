import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between p-10 pl-10 pr-10 pb-3'>
          <div>
            <Link to="/">
              <h1 className='text-lg font-bold'>FYRRE MAGAZINE</h1>
            </Link>
          </div>
          <div className='flex flex-row gap-8'>
            <Link to="/magazine"><h1>Magazine</h1></Link>
            <Link to="/AuthorsPage"><h1>Authors</h1></Link>
            <Link to="/PodcastsPage"><h1 className='pr-2'>Podcast</h1></Link>
            <h1>—</h1>
            <div className='flex items-center flex-row gap-3'>
              <img src="./src/Pictures/Instagram.svg" alt="" className='h-5' />
              <img src="./src/Pictures/Twitter.svg" alt="" className='h-5' />
              <img src="./src/Pictures/youtube.svg" alt="" className='h-7' />
              <img src="./src/Pictures/Signal.svg" alt="" className='h-5' />
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <hr className='bg-black w-full ml-10 mr-10' />
        </div>
      </div>
    </header>
  )
}

export default Header