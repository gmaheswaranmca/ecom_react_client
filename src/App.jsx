import './App.css'
import LoggedInHeader from './admin/header/LoggedInHeader'
import ProductEdit from './admin/product/ProductEdit'
import ProductList from './admin/product/ProductList'
import ProductCreate from './admin/product/ProductCreate'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AdminLogin from './admin/login/AdminLogin'
import LogInHeader from './admin/header/LogInHeader'
import { signOut } from './admin/services/Backend'

function App() {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(true, navigate)
  }
  const isLogggedIn = localStorage.getItem("token") != null;
  return (
    <>
      {isLogggedIn &&  <LoggedInHeader logOut={ logOut }/>}
      {(!isLogggedIn) &&  <LogInHeader/>}
        <Routes>
          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/admin" element={<ProductList/>} />
          <Route path="/admin/list" element={<ProductList/>} />
          <Route path="/admin/create" element={<ProductCreate/>} />
          <Route path="/admin/edit/:id" element={<ProductEdit/>} />
        </Routes>

    </>
  )
}

export default App
