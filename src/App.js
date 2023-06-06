import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
