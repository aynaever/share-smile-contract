import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection/MissionSection';
import FormSection from './components/FormSection/FormSection';
import FooterSection from './components/FooterSection/FooterSection';
import './App.css';

function App() {
  return (
  	  <>
  	  	<Navbar />
  	  	<HeroSection />
  		<MissionSection />
  	  	<FormSection />
  	  	<FooterSection />
  	  </>
  );
}

export default App;
