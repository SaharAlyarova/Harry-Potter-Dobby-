
// import RouterCom, { Router } from '../src/routes';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/header';
import DetailPage from './pages/detail';
// import DetailPage from './pages/detail';
import HomePage from './pages/home';

import RouterCom from './routes';

function App() {
  return (
    <div className="App">
     <Header/>
     {/* <HomePage/> */}
  {/* <DetailPage/> */}
     <RouterCom/>
    </div>
  );
}

export default App;
