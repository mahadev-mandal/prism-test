import React from 'react'
import { prisma } from "../app/lib/prisma";

async function Home() {
  let users = await prisma.user.findMany();
  console.log(users)
  return (
    <div>{users[0].name}</div>
  )
}

export default Home