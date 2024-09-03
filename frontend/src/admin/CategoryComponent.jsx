import React from 'react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  useGetCategroyQuery,
  useStoreCategroyMutation,
  useShowCategroyQuery,
  useUpdateCategroyMutation,
  useDeleteCategroyMutation

} from '../store/slice/CategorySlice';


let categorySchema = yup.object().shape({
  name: yup.string().required(),
  slug: yup.string().required(),
});


function CategoryComponent() {

  const { setError,reset, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(categorySchema)
  });

  const [storeCategory] = useStoreCategroyMutation();
  const { data, error, isLoading } = useGetCategroyQuery();
  const [deleteCategory] = useDeleteCategroyMutation();

  const addCategory=(data)=>{
    storeCategory(data).then((response)=>{
      if(response.error){
        setError('name', {message: response.error.data.message});
      }else{
        console.log(response.data);
        reset();

    
      }
    })

  }

  const deleteCategoryById=(id)=>{
    deleteCategory(id).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <React.Fragment>
      <div className='card'>
        <div className='card-header'>
          <h4>Manage Category</h4>
        </div>
        <div className='card-body'>
          <div className="row">
            <div className="col-md-12">
            <form action="" onSubmit={handleSubmit(addCategory)}>
                    <div className="form-group mb-2">
                        <label htmlFor="name">Name:
                            {errors.name?.message && <span className='text-danger'>{errors.name?.message}</span>}
                        </label>
                        <input type="text"
                            {...register('name')}
                            className='form-control' />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="slug">Slug:
                            {errors.slug?.message && <span className='text-danger'>{errors.slug?.message}</span>}
                        </label>
                        <input type="text"
                            {...register('slug')}
                            className='form-control' />
                    </div>

                    <div className="form-group mb-2">
                        <button className='btn btn-success'>Add Record </button>
                    </div>
                </form>
            </div>
          </div>


          <div className="row">
            <div className="col-md-12">
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((category, index) => (
                    <tr key={category._id}>
                      <td>{index + 1}</td>
                      <td>{category.name}</td>
                      <td>{category.slug}</td>
                      <td>
                        <button className='btn btn-primary'>Edit</button>
                        <button className='btn btn-danger'
                        onClick={()=>deleteCategoryById(category._id)}
                        
                        >Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
      </div>

       

    </React.Fragment>
  )
}

export default CategoryComponent
