import React from 'react'
import Search from './Search'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex pl-20 flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
            {/* <img src="/assets/logo.svg" alt="logo" /> */}
            <div className="flex flex-col lg:flex-row justify-center text-white lg:justify-between items-center gap-5">
                <p>Courses</p>
                <p>About Us</p>
                <p>Employe</p>
                <p>Pricing</p>
                <p>Careers</p>
                <p>Blog</p>
               
            </div>
            <Search/>
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar