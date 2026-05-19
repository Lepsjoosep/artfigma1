import './App.css'
import LoremTicker from './loremticker.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Authors from './authors.jsx'
import Podcast from './podcasts.jsx'
import News from './news.jsx'
import artImg from './Pictures/art.jpg'
import MagazineSection from './MagazineSection.jsx'

function Magazine() {
  return (
    <>
      <Header />
      <h1 className='text-[275px] flex justify-center font-bold mt-[-100px] mb-[-200px] '>MAGAZINE</h1>
      <div className='mt-40 flex align-center justify-between p-10'>
        <h1 className='font-bold text-lg'>CATEGORIES</h1>
        <div>
          <button className="p-2 pt-1 pb-1 border rounded-3xl ml-5">ALL</button>
          <button className="p-2 pt-1 pb-1 border rounded-3xl ml-5">ART</button>
          <button className="p-2 pt-1 pb-1 border rounded-3xl ml-5">STREET ART</button>
          <button className="p-2 pt-1 pb-1 border rounded-3xl ml-5">SCULPTURES</button>
        </div>
      </div>
      <MagazineSection />
      <Footer />
    </>
  )
}

export default Magazine;
