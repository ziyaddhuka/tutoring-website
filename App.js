import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import TutorInfo from './components/tutorInfo';

function App() {
  return (
  <div>
    <div>
      <Header/> 
    </div>
    <TutorInfo name="Eleanor Bash"/>
    <Footer/>
  </div>
    
  );
}

export default App;