import React,{useEffect,useState} from 'react'
import HeaderComponent from '../../layouts/HeaderComponent';
import axios from 'axios';

function UserRegisterComponent() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [gender,setGender] = useState('')
    const [image,setImage] = useState('')

    const addRecord = (e) =>{
        e.preventDefault();
        let uForm = new FormData();
        uForm.append('name',name)
        uForm.append('email',email)
        uForm.append('password',password)
        uForm.append('gender',gender)
        uForm.append('image',image)
        axios.post("http://localhost:5000/users",uForm).then((response)=>{
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        });


    }
  return (
    <div className='container'>
        <div className="row">
            <HeaderComponent />
        </div>
        <div className="col-md-12 mt-3 mb-3">
            <h2>User Register page</h2>
        </div>
        <div className="col-md-12">
            <form action="" onSubmit={addRecord}>
                <div className="form-group mb-2">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required className='form-control' />
                </div>
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
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" required onChange={(e)=>setGender(e.target.value)} className='form-control'>
                        <option value="">----Select Gender----</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="image">Image</label>
                    <input type="file"
                    
                    onChange={(e)=>setImage(e.target.files[0])}
                    
                    className='form-control' />
                </div>
                <div className="form-group mb-2">
                    <button className='btn btn-success'>Add Record</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default UserRegisterComponent
