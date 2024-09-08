import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeComponent from '../components/pages/home/HomeComponent'
import NewsComponent from '../components/pages/news/NewsComponent'
import UserRegisterComponent from '../components/pages/auth/UserRegisterComponent'
import LoginComponent from '../components/pages/auth/LoginComponent'
import AdminRouteMiddelware from '../middleware/AdminRouteMiddelware'
import DashboardComponent from '../admin/DashboardComponent'
import UserComponents from '../admin/UserComponents'
import AddNewsComponent from '../admin/AddNewsComponent'
import ShowNewsComponent from '../admin/ShowNewsComponent'
import CategoryComponent from '../admin/CategoryComponent'
import ProfileComponent from '../admin/ProfileComponent'
import SettingComponent from '../admin/SettingComponent'
import NewsDetailsComponent from '../components/pages/news/NewsDetailsComponent'

function RouterComponent() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/news" element={<NewsComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<UserRegisterComponent />} />
            <Route path="/news/" element={<NewsComponent />} />
            <Route path="/news-details/:slug" element={<NewsDetailsComponent />} />

            <Route path="/admin" element={<AdminRouteMiddelware />}> 
                <Route path="/admin" element={<DashboardComponent />} />
                <Route path="profile" element={<ProfileComponent />} />
                <Route path="setting" element={<SettingComponent />} />
                <Route path="users" element={<UserComponents/>} />
                <Route path="manage-category" element={<CategoryComponent/>} />
                <Route path="add-news" element={<AddNewsComponent/>} />
                <Route path="show-news" element={<ShowNewsComponent/>} />

            </Route>


        </Routes>
    </div>
  )
}

export default RouterComponent
