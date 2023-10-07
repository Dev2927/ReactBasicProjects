import { useEffect, useState } from "react";
import "./App.css";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  const handleChange = () => {
    setQuote(getRandomQuote(quotes));
  };

  return (
    <>
      <div className="main-box">
        <button className="btn" onClick={handleChange}>
          Quote
        </button>
        <div className="quote-box">
          <h3>
            <span>“</span>
            {quote?.text}
          </h3>
          <i>- {quote?.author}</i>
        </div>
      </div>
    </>
  );
}

export default App;
