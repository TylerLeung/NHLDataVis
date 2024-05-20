import './App.css';
import NavBar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <h1>Welcome to my NHL Data Visualizer.</h1>
        <p className='about'>This project was made with the purpose of learning data analytics and how to visualize the 
          many different types of data that are in the public sphere. The main focus will be on the Ottawa 
          Senators as they are my favourite team. I do plan on adding some of my other favourite teams at a 
          later time but that is for not currently planned yet.
        </p>
      </main>
    </div>
  );
}

export default App;
