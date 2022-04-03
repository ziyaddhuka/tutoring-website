import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './cardsLayout.css';
import tutorsData from '../tutors'

function CardsLayout(props) {
    const dat = tutorsData.map((each_data, i)=>{
            return <Card img_src={each_data.img_path} name={each_data.name} description={each_data.description} key={i}/>
        }
    );
    return (
    <div className="container cards-container">
        <div className="row row-cols-1 row-cols-md-4 g-2">
            {dat}
        </div>
    </div>
    );
}
 
export default CardsLayout;