import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
