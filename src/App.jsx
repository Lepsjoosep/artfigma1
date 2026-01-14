import './App.css'
import LoremTicker from './loremticker.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Authors from './authors.jsx'
import Podcast from './podcasts.jsx'
import News from './news.jsx'
import artImg from './Pictures/art.jpg'

function App() {
  return (
    <>
      <Header />

      <div className="flex justify-center">
        <h1 className="font-bold text-[280px]">ART & LIFE</h1>
      </div>

      <LoremTicker />

      <main className="flex flex-row p-10 justify-around">
        <h2 className="font-bold text-8xl w-200 overflow-y-hidden">DON'T CLOSE YOUR EYES</h2>

        <div className="flex flex-col gap-20">
          <p className="w-175 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>

          <div className="flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-3">
              <strong>Text</strong>
              <span>Jakob Gronberg</span>
            </div>

            <div className="flex flex-row gap-3">
              <strong>Date</strong>
              <span>16.March 2022</span>
            </div>

            <div className="flex flex-row gap-3">
              <strong>Duration</strong>
              <span>1 Min</span>
            </div>

            <button className="w-15 h-8 border rounded-xl ml-30">LABEL</button>
          </div>
        </div>
      </main>

      <img src={artImg} alt="art" className="p-10 pl-30 pr-30" />

      <News />

      <hr className="bg-black m-10 ml-30 mr-30" />

      <Podcast />

      <hr className="bg-black m-30" />

      <Authors />

      <Footer />
    </>
  )
}

export default App
