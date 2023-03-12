import './App.css';
import './components/variables.scss';
import words from './utils/words';
import cards from './utils/cards';
import Header from './components/Header/Header';
import WordsList from './components/WordsList/WordsList';
import WordCardSlider from './components/WordCardSlider/WordCardSlider';

function App() {
  return (
    <div className="App">
      <Header />
      <WordCardSlider cards={cards} />
      {
        words.map((word) =>
          <WordsList key={word.id} {...word} />
        )
      }

    </div>
  );
}

export default App;
