import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Meet from './pages/Home/Home.components/Meet'
import Seminars from './pages/Home/Home.components/Seminars'
import Competitions from './pages/Home/Home.components/Competitions'
import Workshop from './pages/Home/Home.components/Workshop';
import Comingsoon from './pages/Home/Home.components/Comingsoon';
import Blog from './pages/Home/Home.components/Blog';
import Gallerypage from './pages/Home/Home.components/Gallerypage';

function App() {
  return (
    <Router basename='/ecell' >
      <Routes>
        <Route path="/" element={
           <Home/>
          
        } />
         <Route path="/meet" element={
           <Meet/>

          
        } />
        <Route path="/seminars" element={
           <Seminars/>
           
          
        } />
        <Route path="/Competitions" element={
           <Competitions/>
          
        } />
        <Route path="/Workshops" element={
           <Workshop/>
        }/>
        <Route path="/Comingsoon" element={
           <Comingsoon/>
        }/>
        <Route path="/Blogs" element={
           <Blog/>
        }/>
        <Route path="/Gallery" element={
           <Gallerypage/>
           
        }/>
        
        
      </Routes>
    </Router>
  );
}

export default App;
