import './App.css';
import AllRoutes from './components/AllRoutes';
import IndiaLogo from './components/Homecomponents/IndiaLogo';
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <IndiaLogo />
      <Navbar  />
      <AllRoutes />
      
    </div>
  );
}

export default App;
