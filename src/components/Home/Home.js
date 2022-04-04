import React from 'react';
import { Button } from 'react-bootstrap';
import {Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <div>
            <div className="container d-flex justify-content-end">
                <div className="text">
                    <h1>Holy-Al-Quran</h1><br></br>
                    <h4>Great Surprise on World</h4><br></br>
                    <p>To the Muslims. the Quran is the Word of Godand contains <br></br>complete guidance for mankind.The Holy Quran is divided into <br></br>114 Surahs or Chapters and each Chapter consists of individual Ayaat or verses There are in total 6,666 verses in the Holy Quran.The Surahs are of varying lengths<br></br> But it also contains directives for its followers, <br></br>historical accounts of certain prophets and peoples</p>
                </div>
                <div className="image shadow-lg p-3 mb-5 bg-body rounded">
                    <img className="" src="https://images.unsplash.com/photo-1580220810949-e7ddee6a4954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                </div>
            </div>
            <div className="container">
                <h1>Customer Review</h1>
                <div className="review d-flex justify-content-evenly mt-4">
                    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                        <h4>Name : Parvez Islam</h4>
                        <p>Just as it does in the world we live in, the cycle of night and day exists in the body and mind of each one of us. We experience the rise and fall of faith; we bear loss with a heavy heart and strive again with great strength for the spiritual tranquility we once felt</p>
                        <h5>Ratings : 5</h5>
                    </div>
                    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                        <h4>Name : Jhanker Mahabub</h4>
                        <p>For mankind! There has come to you an exhortation from your Lord and a cure for whatever disease there is in the hearts, and a guidance and a mercy to the believers.</p>
                        <h5>Ratings : 5</h5>
                    </div>
                    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                        <h4>Name : Shabbir Mahamud</h4>
                        <p>It is not difficult to understand how and why the Qur’anic commandments and Islamic teachings had emboldened many Muslims throughout the Islamic history, dating from the time of the first call of pure monotheism to more contemporary times, to dare to speak the truth.</p>
                        <h5>Ratings : 5</h5>
                    </div>
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