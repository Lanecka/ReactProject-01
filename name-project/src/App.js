import { Routes, Route } from 'react-router-dom';
// Страницы:
import Basket from './Pages/BasketPage';
import Products from './Pages/ProductsPage';
import NotFound from './Pages/NotFoundPage';
import Depiction from './Pages/DepictionCardPage';
import Registration from './Pages/RegistrationPage';
import Entry from './Pages/EntryPage';
import './App.css';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/depiction/:id' element={<Depiction />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/entry' element={<Entry />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
