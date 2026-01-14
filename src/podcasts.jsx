function Podcasts() {
    return (
            <div className='p-10 pl-30 pr-30'>
      <div className='flex flex-row justify-between'>
        <h1 className='font-bold text-8xl h-30'>PODCAST</h1> 
        <div className='flex flex-row gap-2'>
          <h1 className='font-bold text-lg'>ALL EPISODES</h1>
          <img src="./src/Pictures/arrow.png" alt="" className='h-6'/>
        </div>
      </div >
        <div className='flex flex-row justify-center pt-20'>
          <div className='border-1 p-15'>
            <img src="./src/Pictures/podcast-cover.png" alt="" className='h-110'/>
            <h1 className='font-bold text-3xl w-100 h-19 mt-10'>The Problem of today's cultural development</h1>
            <div className='flex flex-row gap-3 pt-20'>
              <h1 className='font-bold'>Date</h1>
              <h1>16.06.2022</h1>
              <h1 className='font-bold'>Duration</h1>
              <h1>1h 20 Min</h1>
            </div>
          </div>
          <div className='border-1 p-15'>
            <img src="./src/Pictures/podcast-cover3.png" alt="" className='h-110'/>
            <h1 className='font-bold text-3xl w-100 h-19 mt-10'>The hidden messages of Jack Nielson</h1>
            <div className='flex flex-row gap-3 pt-20'>
              <h1 className='font-bold'>Date</h1>
              <h1>16.06.2022</h1>
              <h1 className='font-bold'>Duration</h1>
              <h1>60 Min</h1>
            </div>
          </div>
          <div className='border-1 p-15'>
            <img src="./src/Pictures/podcast-cover2.png" alt="" className='h-110'/>
            <h1 className='font-bold text-3x</div>l w-100 h-19 mt-10'>Behind the scenes of the street art culture</h1>
            <div className='flex flex-row gap-3 pt-20'>
              <h1 className='font-bold'>Date</h1>
              <h1>16.06.2022</h1>
              <h1 className='font-bold'>Duration</h1>
              <h1>45 Min</h1>
            </div>
          </div>
        </div>
    </div>
    );
}
export default Podcasts;