import React from 'react';
import './Details.css';

const Details = (props) => {
    const { name, comment, ratings} = props.review;
    return (
        <div>
                <div className='details'>
                    <h3>Name : {name}</h3>
                    <p>Comments:{comment}</p>
                    <h4>Ratings :{ratings}</h4>
                </div>
        </div>
    );
};

export default Details;