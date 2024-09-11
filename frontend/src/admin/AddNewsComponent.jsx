import React,{useState} from 'react';

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'

import { useGetCategroyQuery } from '../store/slice/CategorySlice';
import { useStoreNewsMutation } from '../store/slice/NewsSlice';
import CkeditroComponent from '../editor/CkeditroComponent';


let newsCreateSchema = yup.object().shape({
  categoryId: yup.string().required(),
  title: yup.string().required(),
  slug: yup.string().required(),
});


function AddNewsComponent(props) {
  const [editor, setEditor] = useState(null);
  const { setError, reset, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(newsCreateSchema)
  });

  const [image,setImage] = useState('')
  const { data, error, isLoading } = useGetCategroyQuery();
  const [storeNews] = useStoreNewsMutation();


  const addNewNews = (data) => {
    let formData = new FormData();
    formData.append('categoryId', data.categoryId);
    formData.append('title', data.title);
    formData.append('slug', data.slug);
    formData.append('description', editor);
    formData.append('image', image);

    storeNews(formData).then((response) => {
      if (response.error) {
        setError('title', { message: response.error.data.message });
      } else {
        if(response.data.status){
          reset();
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            timer: 2000
          })
        }
      }
    })


  }

  return (
    <React.Fragment>
      <div className='card'>
        <div className='card-header'>
          <h4>Add News</h4>
        </div>
        <div className='card-body'>
          <form action="" onSubmit={handleSubmit(addNewNews)}>

            <div className="form-group mb-3">
              <label htmlFor="categoryId">Category:
                {errors.categoryId?.message && <span className='text-danger'>{errors.categoryId?.message}</span>}
              </label>
              <select {...register('categoryId')} name="categoryId" className='form-control'>
                <option value="">Select Category</option>
                {data && data.map((category) => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="title">Title:
                {errors.title?.message && <span className='text-danger'>{errors.title?.message}</span>}
              </label>
              <input type="text"
                {...register('title')}
                className='form-control' />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="slug">Slug:
                {errors.slug?.message && <span className='text-danger'>{errors.slug?.message}</span>}
              </label>
              <input type="text"
                {...register('slug')}
                className='form-control' />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description">Description:
                {errors.description?.message && <span className='text-danger'>{errors.description?.message}</span>}
              </label>
              <CkeditroComponent handleChange={(data) => {setEditor(data); }}data={editor} {...props} />
            </div>

            <div className="form-group mb-3">
                    <label htmlFor="image">Image</label>
                    <input type="file"
                    
                    onChange={(e)=>setImage(e.target.files[0])}
                    
                    className='form-control' />
                </div>

            <div className="form-group mb-3">
              <button className='btn btn-success'>News Record </button>
            </div>
          </form>

        </div>
      </div>

    </React.Fragment>
  )
}

export default AddNewsComponent
