
// import RouterCom, { Router } from '../src/routes';
import './App.css';
import Header from './layouts/header';
import HomePage from './pages/home';
// import HomePage from './pages/home';
import RouterCom from './routes';

function App() {
  return (
    <div className="App">
     <Header/>
     <HomePage/>
     <RouterCom/>
    </div>
  );
}

export default App;
