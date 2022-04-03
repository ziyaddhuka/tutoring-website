import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './cardsLayout.css';
import tutorsData from '../tutors'

function CardsLayout(props) {
    const searchTerm = props.dataFromParent;
    const dat = tutorsData
    .filter((val)=> {
        if(searchTerm == ""){
            return val;
        }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
        }
      })
    
    .map((each_data)=>{
            return <Card img_src={each_data.img_path} name={each_data.name} description={each_data.description}/>
        }
    );
    return (
        <div>
            <div class="container cards-container">
                <div class="row row-cols-1 row-cols-md-4 g-2">
                    {dat}
                </div>
            </div>
    </div>
    );
}
 
export default CardsLayout;