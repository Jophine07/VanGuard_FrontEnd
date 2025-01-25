import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import AwarenessModule from './components/AwarenessModule';
import PointsDashboard from './components/PointsDashboard';
import MetricsCalculator from './components/MetricsCalculator';
import IdeaSubmission from './components/IdeaSubmission';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/awarenessmodule' element={<AwarenessModule/>} />
        <Route path='/pointsdashboard' element={<PointsDashboard/>} />
        <Route path='/metricscalculator' element={<MetricsCalculator/>} />
        <Route path='/ideasubmission' element={<IdeaSubmission/>} />
        <Route path='/navbar' element={<Navbar/>} />

              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
