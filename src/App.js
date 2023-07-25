
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
function App() {
  return (
   <>
   <Navbar title="MyApp" aboutText="About Us"/>
   <div className="container">
   <TextForm heading='Enter text you want to analyze'/>
   <About/>
   </div>
   </>
  );
}

export default App;
