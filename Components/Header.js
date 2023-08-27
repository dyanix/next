import React from 'react'
import Link from 'next/link'

const Header = (props) => {
    return (
        <>
            <div className='h-20 px-5 bg-gray-400 flex items-center justify-between'>Hello
                <div className='flex gap-8'>
                    <Link href='/'>Home</Link>
                    <Link href='/About'>About</Link>
                    <Link href='/Contact'>Contact</Link>

                </div></div>

        </>
    )
}

export default Header