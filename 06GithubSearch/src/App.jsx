import { useState } from "react";
import "./App.css";
import Form from "./Form";
import User from "./User";

const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (error) {
    throw new Error(error);
  }
}

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  }

  return (
    <div className="app">
      <main className="main">
        <h2>Project 5: GitHub User Search</h2>
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        <h3>Results</h3>
        <div id="results">
          <div>
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
