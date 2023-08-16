'use client'
import axios from 'axios';
import React, { useState } from 'react'

function Button() {

  const [id, setId] = useState(4);

  const addUser = async () => {
    await axios.post('/api/user', { id, email: `dev${id}@gmail.com`, name: `Dev${id}` })

  }

  return (
    <>
      <input type="number" defaultValue={4} onChange={(e) => setId(e.target.value)} />
      <button onClick={addUser}>Button</button>
    </>
  )
}

export default Button