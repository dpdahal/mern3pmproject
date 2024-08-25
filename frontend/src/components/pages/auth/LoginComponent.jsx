import React,{useEffect,useState} from 'react'
import axios from 'axios'
import HeaderComponent from '../../layouts/HeaderComponent'

function LoginComponent() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const login = async (e)=>{
        e.preventDefault();
        let sendData={
            email:email,
            password:password
        }
        axios.post("http://localhost:5000/auth",sendData).then((response)=>{
            let token = response.data.token;
            localStorage.setItem('token',token);
            window.location.href = '/admin';
        }).catch((err)=>{
            setError(err.response.data.message)
        });

    }
  return (
    <div className='container'>
        <div className="row">
            <HeaderComponent />
        </div>
        <div className="col-md-12 mt-5">
            <h1>Login Page</h1>
            {error && <div className="alert alert-danger">{error}</div>}

            <form action="" onSubmit={login}>
               
                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required className='form-control' />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" required 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='form-control' />
                </div>
                
                <div className="form-group mb-2">
                    <button className='btn btn-success'>Login </button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default LoginComponent
