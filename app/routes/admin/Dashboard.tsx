import React from 'react'
import { Header } from '~/components'

const Dashboard = () => {
  const user = {name:'Clement'}

  return (
    <main className='dashboard wrapper'>
      <Header
      title= {`Welcome ${user?.name ?? 'Guest'}`}
      description="Track Acivity"
       />
       Dashboard page
    </main>
  )
}

export default Dashboard