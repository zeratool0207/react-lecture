import logo from './logo.svg';
import './App.css';
import Iteration from './Iteration';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='react'> 
        {/* <Iteration /> */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
