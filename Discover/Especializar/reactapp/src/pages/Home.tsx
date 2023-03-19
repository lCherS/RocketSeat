import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './styles.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='Container'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder='digite um nome' />
      <button>Adicionar</button>
    </div>
  )
}

export default Home
