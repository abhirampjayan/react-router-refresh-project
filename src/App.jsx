import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/layouts/DashboardLayout';
import About from './components/pages/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardLayout />}>
        <Route path={'/message'} element={<About />}></Route>
      </Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
  );
}

export default App;
