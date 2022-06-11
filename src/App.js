import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection/MissionSection';
import FormSection from './components/FormSection/FormSection';
import FooterSection from './components/FooterSection/FooterSection';
import About from './components/AboutSection/AboutSection';
import SmilesSection from './components/SmilesSeciton/SmilesSection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
  	  <BrowserRouter>
  	  	<Navbar />
		<Routes>
			<Route path="/" element={<HeroSection /> }/>
			<Route path="/smiles" element={<SmilesSection /> }/>
			<Route path="/smile-now" element={<FormSection /> }/>
			<Route path="/about" element={<About /> }/>
  	  	</Routes>
  	  	<FooterSection />
  	  </BrowserRouter>
  );
}

export default App;
