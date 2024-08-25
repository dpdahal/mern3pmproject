import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminRouteMiddelware() {
    let isLogin=localStorage.getItem('token') ? true : false;
    
    const logout = ()=>{
        localStorage.clear();
        window.location.href = '/login';
    }

    if(isLogin){
        return (
            <div>
                <h1>Admin Panel</h1>
                <Outlet />

                <button onClick={logout}>Logout</button>
            </div>
        ) 
    }else{
        window.location.href = '/login';
    }
  
}
