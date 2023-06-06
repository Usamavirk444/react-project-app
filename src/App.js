import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Message from './alerts/message';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Signup />}> */}
          <Route path='/alert' element={<Message />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
