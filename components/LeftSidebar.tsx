import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <div>
        <section className='left_sidebar'>
            <nav className='flex flex-col gap-6'>
                <Link href="/" className='cursor-pointer flex gap-1 items-center pb-10 max-lg:justify-center'>
                <Image src='/icons/logo (1).svg' alt='logo' width={23} height={27}/>
                <h1 className='text-24 font-extrabold text-white-1 max-lg:hidden'>Podcaster</h1>
                </Link>
                
            </nav>
        </section>
    </div>
  )
}

export default LeftSidebar