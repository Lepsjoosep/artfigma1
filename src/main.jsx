import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Magazine from './magazine.jsx'
import MagazinePost from './MagazinePost.jsx'
import PodcastsPage from './PodcastsPage.jsx'
import PagePodcast from './PagePodcast.jsx'
import AuthorsPage from './AuthorsPage.jsx'
import ArtistPage from './ArtistPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path='/MagazinePost' element={<MagazinePost />} />
        <Route path='/PodcastsPage' element={<PodcastsPage />} />
        <Route path='/PagePodcast' element={<PagePodcast />} />
        <Route path='/AuthorsPage' element={<AuthorsPage />} />
        <Route path='/ArtistPage' element={<ArtistPage />} />      
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
