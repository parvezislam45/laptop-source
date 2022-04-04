import React from 'react';
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
                <div className="image">
                    <img className="" src="https://images.unsplash.com/photo-1580220810949-e7ddee6a4954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                </div>
            </div>
            <div className="container">
                <h1>Customer Review</h1>
                <div className="review d-flex justify-content-evenly">
                    <div>
                        <h3>Name : Parvez Islam</h3>
                        <p>The Quran Is a Book that Calms the Heart Of Man.it Spreads the Massage of Peace in The World by creating Fear of Allah  in the Heart and Touching the Prophet of Love</p>
                        <h5>Ratings :</h5>
                    </div>
                    <div>
                        <h3>Name : Mazharul Islam</h3>
                        <p>The Quran Is a Book that Calms the Heart Of Man.it Spreads the Massage of Peace in The World by creating Fear of Allah  in the Heart and Touching the Prophet of Love</p>
                        <h5>Ratings :</h5>
                    </div>
                    <div>
                        <h3>Name : Papon Islam</h3>
                        <p>The Quran Is a Book that Calms the Heart Of Man.it Spreads the Massage of Peace in The World by creating Fear of Allah  in the Heart and Touching the Prophet of Love</p>
                        <h5>Ratings :</h5>
                    </div>
                </div>
                <button>See More</button>

            </div>
        </div>
    );
};

export default Home;