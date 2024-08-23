import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeComponent from '../components/pages/home/HomeComponent'
import NewsComponent from '../components/pages/news/NewsComponent'
import UserRegisterComponent from '../components/pages/auth/UserRegisterComponent'

function RouterComponent() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/news" element={<NewsComponent />} />
            <Route path="/register" element={<UserRegisterComponent />} />

        </Routes>
    </div>
  )
}

export default RouterComponent
