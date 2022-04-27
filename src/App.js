
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hi Hi</header>
        <main>
        
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Lea</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
