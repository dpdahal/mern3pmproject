import React from 'react'
import HeaderComponent from '../../layouts/HeaderComponent'
import { useGetNewsBySlugQuery } from '../../../store/slice/NewsSlice'
import { useParams } from 'react-router-dom';

function NewsDetailsComponent() {
    const { slug } = useParams();
    const { data, error, isLoading } = useGetNewsBySlugQuery(slug);

    return (
        <div className='container'>
            <div className="row">
                <HeaderComponent />
            </div>
            <div className="col-md-12 mt-5">
                {isLoading && <div>Loading...</div>}
                {error && <div>Error</div>}
                {data && 
                    <div>
                        <img src={data.image} alt={data.title} style={{width: "100%"}} />
                        <h3>{data.title}</h3>
                        <p className="card-text"
                                    dangerouslySetInnerHTML={{ __html:(data.description)
                                                        }}
                                                    />
                    </div>
                }

            
            </div>

        </div>
    )
  
}

export default NewsDetailsComponent
