import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = () => {
    const wordData = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (wordData) {
      setResult(wordData.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="dictionary-app" style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Dictionary App</h1>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Enter a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      {result !== null && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default App;
