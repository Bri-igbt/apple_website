import React from 'react'
import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils'


const Navbar = () => {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width fixed'>
                <img src={appleImg} alt="Apple" className='h-14 w-18' />

                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((nav, index) => (
                        <div key={index} className='p-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                            {nav}
                        </div>
                    ))}
                </div>

                <div className='flex items-baseline gap-7 p-5 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt="searchImg" className='w-18 h-18' />
                    <img src={bagImg} alt="bag" className='w-18 h-18' />
                </div>
            </nav>

            
        </header>
    )
}

export default Navbar
