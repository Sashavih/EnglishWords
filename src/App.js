import './App.css';
import WordsTable from './components/WordsTable//WordsTable';
import cards from './utils/cards';
import Header from './components/Header/Header';
import WordCardSlider from './components/WordCardSlider/WordCardSlider';
import Footer from './components/Footer/Footer';
import NotFoundPade from './components/NotFoundPage/NotFoundPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CollectionWords } from './context/CollectionWordsContext';

function App() {
  return (
    <CollectionWords>
      <div className='App'>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header />
                  <WordsTable />
                  <Footer />
                </>
              }
            />
            <Route
              path='/Game'
              element={
                <>
                  <Header />
                  <WordCardSlider cards={cards} /> <Footer />
                </>
              }
            />
            <Route
              path='*'
              element={
                <>
                  <NotFoundPade />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </CollectionWords>
  );
}
export default App;
