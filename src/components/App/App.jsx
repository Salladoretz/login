import React from 'react'
import Header from '../Header/Header'
import AppRoutes from './AppRoutes'
import '../../styles/index.scss'

const App = () => (
    <div className='app'>
      <Header/>
      <AppRoutes/>
    </div>
  )

export default App