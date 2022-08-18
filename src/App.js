import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import CheckoutSection from './Sections/HomePage/CheckoutSection';
import FooterSection from './Sections/HomePage/FooterSection';

function App() { 
  return (
    <div className="App">
    <Navbar />
    
    <Routes>
    <Route path="/" element={<HomePage />}/>

    <Route path="/checkout" element={<CheckoutSection />}/>
    
    </Routes>
    
      <FooterSection />
    </div>
  );
}

export default App;
