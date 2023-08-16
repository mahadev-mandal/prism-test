import React from 'react'
import { prisma } from "../app/lib/prisma";
import Button from '../app/components/Button';

async function Home() {
  let users = await prisma.user.findMany();


  // addUser()
  console.log(users)
  return (<>

    {users.map((item) => (
      <div key={item.name}>{item.name}</div>
    ))}

    <Button />
  </>
  )
}

export default Home