import logo from './logo.svg';
import './App.css';
import{ BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/landingPage/header/Home';
import About from './components/landingPage/header/About';
import Contact from './components/landingPage/header/Contact';
import Blogs from './components/landingPage/header/Blogs';
import Navbar from './components/landingPage/navbar/Navbar';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
