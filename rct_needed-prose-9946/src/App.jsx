import './App.css';
import AllRoutes from './components/AllRoutes';
import IndiaLogo from './components/Homecomponents/IndiaLogo';
import Navbar from "./components/Navbar"
import SearchBox from './components/SearchBox';


function App() {
  return (
    <div className="App">
      <IndiaLogo />
      <SearchBox />
      <Navbar  />
      <AllRoutes />
      
    </div>
  );
}

export default App;
