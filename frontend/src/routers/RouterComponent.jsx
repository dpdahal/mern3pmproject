import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeComponent from '../components/pages/home/HomeComponent'
import NewsComponent from '../components/pages/news/NewsComponent'
import UserRegisterComponent from '../components/pages/auth/UserRegisterComponent'
import LoginComponent from '../components/pages/auth/LoginComponent'
import AdminRouteMiddelware from '../middleware/AdminRouteMiddelware'
import DashboardComponent from '../admin/DashboardComponent'

function RouterComponent() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/news" element={<NewsComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<UserRegisterComponent />} />

            <Route path="/admin" element={<AdminRouteMiddelware />}> 
                <Route path="/admin" element={<DashboardComponent />} />

            </Route>


        </Routes>
    </div>
  )
}

export default RouterComponent
