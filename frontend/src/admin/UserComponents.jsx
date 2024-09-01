import React from 'react';
import { useGetUserQuery } from '../store/slice/UserSlice';

export default function UserComponents() {

    const { data, error, isLoading } = useGetUserQuery();

    if (isLoading) return <React.Fragment>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </React.Fragment>
    if (error) return <div>Error: {error.message}</div>

    return (
        <React.Fragment>
          <div className='card'>
        <div className='card-header'>
          <h4>Uaser List</h4>
        </div>
        <div className='card-body'>
        <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>S.n</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.map((user,index) => (
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.role}</td>
                            <td><img src={user.image} alt={user.name} width='50' height='50' /></td>
                            <td>
                                <button className='btn btn-primary'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
          
    
        </React.Fragment>
    )

    
   
}
