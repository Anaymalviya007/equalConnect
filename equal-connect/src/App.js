
import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Dashboard from './project/dashboard/Dashboard';
import CreateTracker from './project/Create Tracker/CreateTracker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './project/Search Record/Search';
import Register from './project/register/Register';
import Login from './project/register/Login';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={ <Dashboard />}/>
      <Route path="/createTracker" element={ <CreateTracker/>}/>
      <Route path="/search"  element={<Search/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
