import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending podacasts</h1>
      <Button variant="outline" className='bg-orange-1'>ADD</Button>
      </section>
      
    </div>
  )
}

export default Home