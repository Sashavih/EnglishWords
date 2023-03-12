import './App.css';
import './components/variables.scss';
import words from './utils/words';
import cards from './utils/cards';
import Header from './components/Header/Header';
import WordCard from './components/WordCard/WordCard';
import WordsList from './components/WordsList/WordsList';

function App() {
  return (
    <div className="App">
      <Header />
      {
        cards.map((card) =>
          <WordCard key={card.id} {...card} />
        )
      }

      {
        words.map((word) =>
          <WordsList key={word.id} {...word} />
        )
      }

    </div>
  );
}

export default App;
