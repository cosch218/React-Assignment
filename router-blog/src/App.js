import { Routes, Route } from 'react-router-dom';
import './css/style.css'

import Layout from './pages/Layout';
import Home from './pages/Home';
import Storylist from './pages/Storylist';
import Story from './pages/Story';

import { DataProvider } from './context/DataContext';


function App() {
  return (
    <div>
      <DataProvider>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/storylist' element={<Storylist/>}>
              <Route path='/storylist/:name' element={<Story/>}/>
            </Route>
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
