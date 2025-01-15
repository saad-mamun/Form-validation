import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

function Section() {

    const love = useContext(DataContext)

  return (
    <div>
      <h1>section  {love.age}</h1>
    </div>
  )
}

export default Section
