
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Helloworld from './Component/Helloworld/Helloworld';

import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Title from './Component/Title/Title';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div >
      {/* my first login screen */}
     {/* <Login/> */}
     {/* my second dashboard screen */}
     {/* <Dashboard/> */}
     {/* my third Register screen */}
     {/* <Register/> */}
     {/* my fourth hello world logs screen */}
     
     <Router>
      <Routes>
        <Route path='/login' element={<Login/> }      />
        <Route path='/register' element={<Register/> }      />
        <Route path='/' element={<Dashboard/> }      />
        <Route path='/title' element={<Helloworld/> }      />
        <Route path='/blogs' element={<Title/> }      />
     

       
      </Routes>
     </Router>
     {/* my fifth title screen */}
     {/* <Title/> */}
     
     
     
     

    </div>
  );
}

export default App;
