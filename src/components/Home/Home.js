import React from 'react';
import { Button,Row } from 'react-bootstrap';
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
                    <h1 className='text-success'>Laptop Mania</h1><br></br>
                    <h4 className='text-info'>Laptop Your Daily Programming Partner</h4><br></br>
                    <p>Laptops combine all the input/output components and capabilities of a desktop computer<br></br> including the display screen, small speakers, a keyboard data storage device, sometimes<br></br> an optical disc drive, pointing devices (such as a touch pad or pointing stick), with an operating system, a processor and memory into a single unit. <br></br>Most modern laptops feature integrated webcams and built-in microphones</p>
                </div>
                <div className="image shadow-lg p-3 mb-5 bg-body rounded">
                    <img className="" src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                </div>
            </div>
            <div className="container">
                <h1>Customer Review</h1>
                <div className="container">
                    <Row xs={1} md={3} className="g-4">
                        {
                            reviews.slice(0, 3).map(review => <Details
                                key={review.key}
                                review={review}
                                data
                            ></Details>)
                        }
                    </Row>
                </div>
                <Button variant="dark"><Link to="/review"><spn className="text-white">More Review</spn></Link></Button>

            </div>
            <footer>
                <p>Designed by ABu Bokkor <br></br>Learner Programming Hero Batch-5</p>
            </footer>
        </div>
    );
};

export default Home;