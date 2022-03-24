import './App.css';
import Login from './pages/signin/Login';
import Register from './pages/signup/Register';
import { store } from './redux/store';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Otp from './pages/otp/Otp';
function App() {

  const {isSaved} = useSelector((state)=>state.signup);
  const {otpOK} = useSelector((state)=>state.login);
  const {isVerified} = useSelector((state)=>state.otp);
  return (
    <div className="App" store={store}>
      <Router>
         <Routes>
           <Route path="/register" element={isSaved ? <Navigate to="/Login"/> : <Register />} />      
           <Route path="/login" element={otpOK ? <Navigate to='/otpCheck'/> : <Login />} />      
           <Route path="/otpCheck" element={isVerified ? <Navigate to='/'/> : <Otp />} />  

         </Routes>
      </Router>
    </div>
  );
}

export default App;
