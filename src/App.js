
import './App.css';
import words from './utils/words';
import cards from './utils/cards';
import Header from './components/Header/Header';
import WordsList from './components/WordsList/WordsList';
import WordCardSlider from './components/WordCardSlider/WordCardSlider';
import Footer from './components/Footer/Footer';
import NotFoundPade from './components/NotFoundPage/NotFoundPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<div className='worldListBox'>{words.map((word) => (<WordsList key={word.id} {...word} />))}</div>} />
          <Route path="/Game" element={<WordCardSlider cards={cards} />} />
          <Route path="*" element={<NotFoundPade />} />
        </Routes>
        <Footer />
        <Routes></Routes>
      </div>
    </Router>

  );

}

export default App;
