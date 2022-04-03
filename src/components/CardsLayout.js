import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './cardsLayout.css';
import tutorsData from '../tutors'

function CardsLayout(props) {
<<<<<<< HEAD
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
=======
    const dat = tutorsData.map((each_data, i)=>{
            return <Card img_src={each_data.img_path} name={each_data.name} description={each_data.description} key={i}/>
        }
    );
    return (
    <div className="container cards-container">
        <div className="row row-cols-1 row-cols-md-4 g-2">
            {dat}
        </div>
>>>>>>> 46913b506169ee3bc38b8f0482897f61b4079a5b
    </div>
    );
}
 
export default CardsLayout;