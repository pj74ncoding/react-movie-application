import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { YoutubeMovieApp } from './youtubemovieapp/movieapp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <YoutubeMovieApp />
  </StrictMode>
)
