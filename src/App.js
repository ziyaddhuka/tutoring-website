import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import CardsLayout from './components/CardsLayout';
import JumbotronBanner from './components/JumbotronBanner';
// import TutorsFilter from './components/TutorsFilter';
function App() {
  return (
  <div>
      <Header/> 
      <JumbotronBanner/>
      <CardsLayout/>
      <Footer/>
  </div>
  );
}

export default App;