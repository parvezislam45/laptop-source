import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Review from './components/Review/Review';
import Home from './components/Home/Home';
import DeshBoard from './components/DeshBoard/DeshBoard';
import Error from './components/Error/Error';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element= {<Home></Home>}></Route>
      <Route path='/home' element= {<Home></Home>}></Route>
      <Route path='/review' element ={<Review></Review>}></Route>
      <Route path='/deshboard' element ={<DeshBoard></DeshBoard>}></Route>
      <Route path= '/blogs' element={<Blogs></Blogs>}></Route>
      <Route path ='*' element = {<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
