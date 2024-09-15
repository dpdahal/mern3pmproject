import React,{useState} from 'react'
import { useGetNewsQuery } from '../../../store/slice/NewsSlice'
import HeaderComponent from '../../layouts/HeaderComponent'
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeComponent() {
    const [searchData, setSearchData] = useState([]);

    const { data, error, isLoading } = useGetNewsQuery();

    const getLimit = (text) => {
        return text.substring(0, 100) + '...';
    }

    
    const limitDescription = (description) => {
        return description.substring(0, 100) + "..."
    }

    const customStyle = {
        height: '300px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'none',
    }

    const handleSearch = (e) => {
        let search = e.target.value;
        let url = `http://localhost:5000/news/search/${search}`;
        axios.get(url).then((res) => {
            setSearchData(res.data);

        }).catch((err) => {
            console.log(err);
        });

        if(search.length > 0){
            document.querySelector('#search_box').style.display = 'block';
        }

    }



    return (
        <div className='container'>
            <div className="row">
                <HeaderComponent />
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" 
                        onChange={handleSearch}
                        className='form-control' />

                        <div style={customStyle} id='search_box' >
                            <ul>
                            {searchData && searchData.map((news,index) => (
                             
                                   <li key={index}> <Link to={`/news-details/${news.slug}`} style={{textDecoration:"node",color:"white"}}>{news.title}</Link></li>
                            ))}
                            </ul>

                
                        </div>
                    </div>
                </div>
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
