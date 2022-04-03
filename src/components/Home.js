import React from 'react'
import CardsLayout from './CardsLayout';
import JumbotronBanner from './JumbotronBanner';
import TutorsFilter from './TutorsFilter';

function Home() {
  return (
  <div>
      <JumbotronBanner/>
      <TutorsFilter/>
      <CardsLayout/>
  </div>
  );
}

export default Home;