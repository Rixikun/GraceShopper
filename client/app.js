import React from 'react'

import {Navbar, AllProducts} from './components'
import Routes from './routes'
import SingleProduct from './components/singleProductView'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AllProducts />
    </div>
  )
}

export default App
