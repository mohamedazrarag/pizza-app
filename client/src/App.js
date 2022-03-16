import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
    </div>
  );
}

export default App;



