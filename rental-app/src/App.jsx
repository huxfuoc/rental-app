import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Customer from './components/Customer';
import Categories from './components/Categories';
import CarManager from './components/CarManager';
import OrderHistory from './components/OrderHistory';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {

  return (
    <>
      <div className='dashboard'>
        <Router>
          <div className='l'>
            <Sidebar />
          </div>
          <div className='r'>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/manager" element={<CarManager />} />
              <Route path="/history" element={<OrderHistory />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
