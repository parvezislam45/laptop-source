import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
import useReviews from '../../Hook/reViews';
import Details from '../Details/Details';


const Home = () => {
    const [reviews] = useReviews()
    return (
        <div>
            <div className="container d-flex justify-content-end">
                <div className="text">
                    <h1>Holy-Al-Quran</h1><br></br>
                    <h4>Great Surprise on World</h4><br></br>
                    <p>To the Muslims. the Quran is the Word of God and contains <br></br>complete guidance for mankind.The Holy Quran is divided into <br></br>114 Surahs or Chapters and each Chapter consists of individual Ayaat or verses There are in total 6,666 verses in the Holy Quran.The Surahs are of varying lengths<br></br> But it also contains directives for its followers, <br></br>historical accounts of certain prophets and peoples</p>
                </div>
                <div className="image shadow-lg p-3 mb-5 bg-body rounded">
                    <img className="" src="https://images.unsplash.com/photo-1580220810949-e7ddee6a4954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                </div>
            </div>
            <div className="container">
                <h1>Customer Review</h1>
                <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {
                        reviews.slice(0,3).map(review => <Details
                        key ={review.key}
                        review ={review}
                        data 
                        ></Details>)
                    }
                    </Row>
                </div>
                <Button variant="dark"><Link to="/review"><spn className="text-white">More Review</spn></Link></Button>

            </div>
            <footer>
                <p>Designed by Aurthohin Parvez <br></br>Learner Programming Hero Batch-5</p>
            </footer>
        </div>
    );
};

export default Home;