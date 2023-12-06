import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Components/Login/Login';
import VerifyLogin from './Components/Login/VerifyLogin';
import HomePage from './Pages/HomePage';
import ProtectedRoute from './Components/Login/ProtectedRoute';

function App() {
   // Checking if a token is present in local storage
  const token = localStorage.getItem('token')
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/login/verify' element={<VerifyLogin />} />
        <Route path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
