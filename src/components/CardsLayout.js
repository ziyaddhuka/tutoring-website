import React, { Component } from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './cardsLayout.css';
import tutorsData from '../tutors'

function CardsLayout(props) {
    const dat = tutorsData.map((each_data)=>{
            return <Card img_src={each_data.img_path} name={each_data.name} description={each_data.description}/>
        }
    );
    return (
    <div class="container cards-container">
        <div class="row row-cols-1 row-cols-md-4 g-2">
            {dat}
        </div>
    </div>
    );
}
 
export default CardsLayout;