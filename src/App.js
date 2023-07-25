
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
   <>
   <Navbar title="MyApp" aboutText="About Us"/>
   <div className="container">
   <TextForm heading='Enter text you want to analyze'/>
   </div>
   </>
  );
}

export default App;
