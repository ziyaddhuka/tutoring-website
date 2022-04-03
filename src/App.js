import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import CardsLayout from './components/CardsLayout';
import JumbotronBanner from './components/JumbotronBanner';
// import Search from './components/Search';
import TutorsFilter from './components/TutorsFilter';
// import SearchAndFilter from './components/SearchAndFilters';

function App() {
  return (
  <div>
      <Header/>
      <JumbotronBanner/>
      <TutorsFilter/>
      <CardsLayout/>
      <Footer/>
  </div>
  );
}

export default App;
