import React from 'react'
import { useGetNewsQuery } from '../../../store/slice/NewsSlice'
import HeaderComponent from '../../layouts/HeaderComponent'
import { Link } from 'react-router-dom';

function HomeComponent() {

    const { data, error, isLoading } = useGetNewsQuery();

    const getLimit = (text) => {
        return text.substring(0, 100) + '...';
    }

    
    const limitDescription = (description) => {
        return description.substring(0, 100) + "..."
    }

    return (
        <div className='container'>
            <div className="row">
                <HeaderComponent />
                <div className="col-md-12 mt-3">
                    <h3>Latest news</h3>
                </div>
            </div>
            
            {isLoading && <div>Loading...</div>}
            {error && <div>Error</div>}
            <div className="row">
                {data && data.map((news) =>(
                    <div className="col-md-4" key={news._id}>
                        <div className="card mt-3">
                            <img src={news.image} style={{height:"200px"}} className="card-img-top" alt={news.title} />
                            <div className="card-body">
                                <h5 className="card-title">{news.title}</h5>
                                <p className="card-text"
                                    dangerouslySetInnerHTML={{ __html: limitDescription(news.description)
                                                        }}
                                                    />
                                <Link to={`/news-details/${news.slug}`} className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default HomeComponent
