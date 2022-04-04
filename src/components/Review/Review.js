import React from 'react';
import { Row } from 'react-bootstrap';
import useReviews from '../../Hook/reViews';
import Details from '../Details/Details';

const Review = () => {
    const [reviews, setreviews] = useReviews()

    return (
        <div>
            <h1>Riview Page</h1>
            <div className="container">
            <Row xs={1} md={3} className="g-4">
            {
                reviews.map(review => <Details
                    key={review.id}
                    review={review}
                ></Details>)
            }
            </Row>
            </div>
        </div>
    );
};

export default Review;