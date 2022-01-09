import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,originals} from './url';

function App() {
  
  return (
    <div>
      <NavBar/>

      <Banner/>

      <RowPost url={originals} title="Netflix Orginals"/>

      <RowPost url={action} title="Action"  isSmall/>    
      
    </div>
    
  )
}

export default App
