import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import sbg from '../../../public/hilink-logo.svg'

function Navbar() {
  return (
    <nav className=' border-2 border-red-500 flexBetween max-container padding-container py-5 relative z-30'>
        <Link href={'/'} >
            <Image src={sbg} width={'74'} height={'29'} alt=''/>
        </Link>
    </nav>
  )
}

export default Navbar