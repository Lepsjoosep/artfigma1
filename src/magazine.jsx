import './App.css'
import LoremTicker from './loremticker.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Authors from './authors.jsx'
import Podcast from './podcasts.jsx'
import News from './news.jsx'
import artImg from './Pictures/art.jpg'

function Magazine() {
  return (
    <>
      <Header />
      <div className='p-10'>
        <h1 className='text-2xl font-bold'>Magazine Page</h1>
        <p>Your magazine content goes here</p>
      </div>
      <Footer />
    </>
  )
}

export default Magazine;