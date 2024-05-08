import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductsPage from './pages/products.jsx'
import Layout from './components/layout.jsx'
import "./App.css"
import Home from './pages/home.jsx'
import DetailProd from './pages/detailProd.jsx'
import Login_singin from './pages/login&Sing.jsx'
import UserInfo from './pages/userInfo.jsx'
import {Context} from './context/context.jsx'
import CartPage from './pages/cart.jsx'
import Payment from './pages/payment.jsx'
import CreateProductPage from './pages/createProduct.jsx'
import SuccesPayment from './pages/succesPayment.jsx'

function App() {
  
  return (
    <>
      <Router>
      <Context>
       <Layout >
        <Routes>
          <Route  path='/' element={ <Home /> } />
          <Route path='/productos' element={ <ProductsPage /> }/>
          <Route path='/productos/category/:category' element={ <ProductsPage /> }/>
          <Route path='/productos/:Pid' element={ <DetailProd /> }/>
          <Route path='/productos/create' element={ <CreateProductPage /> }/>
          <Route path='/login' element={<Login_singin/>} />
          <Route path='/user/information' element={<UserInfo/>} />
          <Route path='/user/cart' element={<CartPage />} />
          <Route path='/user/cart/payment/:total' element={<Payment />} />
          <Route path='/user/cart/payment-succesful' element={<SuccesPayment />} />
        </Routes>
        </Layout>
       </Context>
      </Router>
    </>
  )
}

export default App
