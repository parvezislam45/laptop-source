import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Review from './components/Review/Review';
import Home from './components/Home/Home';
import DeshBoard from './components/DeshBoard/DeshBoard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/home' element= {<Home></Home>}></Route>
      <Route path='/review' element ={<Review></Review>}></Route>
      <Route path='/deshboard' element ={<DeshBoard></DeshBoard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
