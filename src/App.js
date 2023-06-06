import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from './components/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<Signup />}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
