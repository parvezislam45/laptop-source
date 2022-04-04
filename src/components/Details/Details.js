import React from 'react';
import './Details.css';

const Details = (props) => {
    const { name, comment, ratings} = props.review;
    return (
        <div>
                <div className='details shadow-lg p-3 mb-5 bg-body rounded'>
                    <h5>Name : {name}</h5>
                    <p>Comments:{comment}</p>
                    <h5>Ratings :{ratings}</h5>
                </div>
        </div>
    );
};

export default Details;