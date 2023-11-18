import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div className='home'>
      <h1>Добро пожаловать :)</h1>
      <div className='home-link'>
        <Link
          to="/"
        >
          вернуться в окно логина
        </Link>
      </div>
    </div>
  )

export default Home