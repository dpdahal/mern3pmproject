import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeComponent from '../components/pages/home/HomeComponent'
import NewsComponent from '../components/pages/news/NewsComponent'

function RouterComponent() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/news" element={<NewsComponent />} />
        </Routes>
    </div>
  )
}

export default RouterComponent
