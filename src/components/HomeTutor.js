import React from 'react'
import JumbotronBanner from './JumbotronBanner';
import TutorsFilter from './TutorsFilter';
import Appointments from './appointments';

function HomeTutor(props) {
    console.log("props", props);
    console.log("aU", props.authedUser);
  return (
  <div>
      <JumbotronBanner/>
      <Appointments authedUser={props.authedUser}/>
  </div>
  );
}

export default HomeTutor;