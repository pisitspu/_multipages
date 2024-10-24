// import components
import Home from './pages/Home/home'
import Todo from './pages/Todo/Todo'
import Calculator from './pages/Calculator/Calculator'
import Layout from './layouts/Layout/Layout'
import Components from './pages/Components/Components'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import { fetchProducts } from './data/products'
import Login from './pages/Login/Login'
// import Counter from './pages/Counter/Counter'
// -----------------------------------------
import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

// import styles
import './App.css'

//HashRouter, BrowserRouter, MemoryRouter

const intTab = 'home'

function App() {



  const [token, setToken] = useState('')

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [tab, setTab] = useState('')


  useEffect(() => setProducts(fetchProducts()), [])
  useEffect(() => console.log(products), [products])


  useEffect(() => {
    setTab(intTab)
  }, []) //first load


  if (token === '') {
    return (<Login setToken={setToken} />)
  } else {
    return (
      <div className="App-container">
        <HashRouter>
          <Routes>
  
            <Route
              element={<Layout tab={tab} setTab={setTab}
                products={products} cart={cart} setToken={setToken} />}
            >
              <Route path={'/'} element={<Home />} />
              {/* <Route path={'/counter'} element={<Counter />} /> */}
              <Route path={'/home'} element={<Home />} />
              <Route path={'/calculator'} element={<Calculator />} />
              <Route path={'/components/*'} element={<Components />} />
              <Route path={'/todo'} element={<Todo />} />
              <Route path={'/products'} element={<Products
                products={products}
                cart={cart}
                setCart={setCart}
              />} />
              <Route path={'/cart'} element={<Cart
                cart={cart}
                setCart={setCart}
              />} />
            </Route>
  
          </Routes>
        </HashRouter>
      </div>
    )
  }
  


}

export default App
