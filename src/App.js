import React  from 'react';
import { RealtimeData } from './components/realtimeData/index';
import { Crud } from './components/crud/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
<RealtimeData/>
    <Crud/>
    </div>
   
  
  );
}

export default App;
