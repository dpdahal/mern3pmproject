import React from 'react';
import { useGetNewsQuery,useDeleteNewsMutation } from '../store/slice/NewsSlice';
import { Link } from 'react-router-dom';

export default function ShowNewsComponent() {
    const { data, error, isLoading } = useGetNewsQuery();
    const [deleteNews] = useDeleteNewsMutation();

    const handleDelete = async (id) => {
      await deleteNews(id);
      console.log('News Deleted');



    }
    
    return (
        <React.Fragment>
          <div className='card'>
            <div className='card-header'>
              <h4>News List</h4>
            </div>
            <div className='card-body'>
              {isLoading && <div>Loading...</div>}
              {error && <div>Error: {error}</div>}
              {data && (
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th>S.n</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((news,index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{news.title}</td>
                        <td>{news.categoryId.name}</td>
                        <td>
                          <img
                            src={news.image}
                            alt={news.title}
                            style={{ width: '50px', height: '50px' }}
                          />
                        </td>
                        <td width="15%">
                          <Link to={`/admin/news/${news._id}`} className='btn btn-primary'>
                            Edit
                          </Link>

                          <button className='btn btn-danger'
                          onClick={() => handleDelete(news._id)}                          
                          >Delete</button>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
         
        </React.Fragment>
      )
}
