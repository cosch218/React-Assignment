import './App.css';
import './style.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import NavHeader from './components/NavHeader';
import Storylist from './pages/Storylist';
import Story from './pages/Story';
import { DataProvider } from './context/DataContext';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <NavHeader/>
        <Outlet/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/storylist' element={<Storylist/>}>
            <Route path='/storylist/:name' element={<Story/>}/>
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
