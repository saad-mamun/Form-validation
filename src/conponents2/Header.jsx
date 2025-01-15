import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

function Header() {

    const data = useContext(DataContext)

  return (
    <div>
      <h1>header {data.username}</h1>
    </div>
  )
}

export default Header
