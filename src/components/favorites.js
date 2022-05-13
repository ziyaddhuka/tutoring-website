import React, {useState, useEffect} from 'react';

function Favorites(props){
  
    const [favesData, setFavesData] = useState([]);
    const [error, setError] = useState(null);
    const [tutorName, setTutorName] = useState("");
    const [stringData, setStringData] = useState("");

    //const [tutorsData, setTutorsData] = useState([]);

    const userID = props.authedUser;

    useEffect(() => {
      let ignore = false;
      if (!ignore)  thing();
      return () => { ignore = true; }
      },[]);


    // function testing(eachTutor){

      // useEffect(() => {
      //   let ignore = false;
      //   if (!ignore){
      //   console.log("testing");
      //   fetch('http://localhost:3000/tutors/' + eachTutor,{
      //       headers: {
      //         'Content-type' : 'application/json',
      //         'Accept' : 'application/json'
      //       }
      //     })
      //   .then(res => res.json())
      //   .then((data) => {
      //       console.log('fav tutuor: ', data[0].firstname);
      //       setStringData(stringData + data[0].firstname + ", ");
      //   });
      //   }
      //   return () => { ignore = true; }
      //   },[]);
      // }

    function thing(){
        console.log("thing");
        fetch(`http://localhost:3000/students/${userID}`, {
          headers: {
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
          }
        })
        .then(res => res.json())
        .then((data) => {
          console.log('user data: ',data)
          setFavesData(data);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error);
        })
      }

    //   const dat = favesData
    //     .filter((val)=> {
    //       console.log('Filter check')
    //         if(val._id === userID){
    //           console.log('Hurray')
    //           console.log(val._id)
    //           return val;
    //         }
    //     })
    // .map((each_data)=>{
    //   console.log('JHmmm')
    //     return <div>
    //         {each_data.favoriteTutors.map((eachTutor)=>testing(eachTutor))}
    //     </div>
    // });
    // console.log('Strange')


    return(
        <div>
            <h1 class="mx-3 my-4">Favorites</h1>
            {stringData}
            <button>Test</button>
        </div>
    );
}
export default Favorites;