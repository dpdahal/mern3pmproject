import React from 'react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUserMutation } from '../../../store/slice/AuthSlice';
import HeaderComponent from '../../layouts/HeaderComponent'

let loginSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});

function LoginComponent() {
    const { setError, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const [loginUser] = useLoginUserMutation();

    const login = async (data) => {
        try {
            const response = await loginUser(data);
            if(response.error){
                setError('email', {message: response.error.data.message});
            }else{
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                window.location.href = '/admin';
            }
            
        } catch (error) {
            console.log(error.data);
        }
    }
    return (
        <div className='container'>
            <div className="row">
                <HeaderComponent />
            </div>
            <div className="col-md-12 mt-4">
                <h3 className='mb-3'>Login Page</h3>

                <form action="" onSubmit={handleSubmit(login)}>
                    <div className="form-group mb-2">
                        <label htmlFor="email">Email:
                            {errors.email?.message && <span className='text-danger'>{errors.email?.message}</span>}
                        </label>
                        <input type="email"
                            {...register('email')}
                            className='form-control' />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="password">Password:
                            {errors.password?.message && <span className='text-danger'>{errors.password?.message}</span>}
                        </label>
                        <input type="password"
                            {...register('password')}
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
