import React from 'react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from 'axios'
import HeaderComponent from '../../layouts/HeaderComponent'

let loginSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});

function LoginComponent() {
    const { setError, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const login = async (data) => {

        axios.post("http://localhost:5000/auth", data).then((response) => {
            let token = response.data.token;
            localStorage.setItem('token', token);
            window.location.href = '/admin';
        }).catch((err) => {
            console.log(err);
        });

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
