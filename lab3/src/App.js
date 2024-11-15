import React from "react";
import TourForm from "./components/TourForm"; // Імпорт форми
import "./App.css"; // Стили, якщо потрібні

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>React Форма з Валідацією</h1>
        </header>
        <main>
          <TourForm /> {/* Відображення форми */}
        </main>
      </div>
  );
}

export default App;
