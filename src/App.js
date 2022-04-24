import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import 'react-toastify/dist/ReactToastify.css';
import ToTop from './Pages/ToTop/ToTop';
import NotEmailVerified from './Pages/Shared/NotEmailVerified/NotEmailVerified';
import AddProduct from './Pages/AddProduct/AddProduct';
import DeleteProduct from './Pages/DeleteProduct/DeleteProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/verify' element={<NotEmailVerified></NotEmailVerified>}></Route>
        <Route path='/products/add' element={<AddProduct></AddProduct>}></Route>
        <Route path='/products/delete' element={<DeleteProduct></DeleteProduct>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToTop></ToTop>
      <Footer></Footer>
    </div>
  );
}

export default App;
