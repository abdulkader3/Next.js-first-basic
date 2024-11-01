import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>

    <nav>
        <ul className='flex gap-10 justify-center '>
            <li>
                <Link href={'/'}> Home </Link>
            </li>
            <li>
                <Link href={'/contact'}> contact </Link>
            </li>
            <li>
                <Link href={'/about'}> Home </Link>
            </li>
        </ul>
    </nav>
      
    </>
  )
}

export default Navbar
