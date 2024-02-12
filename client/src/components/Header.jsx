import React, { useState } from 'react'
import SolutionMenuItems from './Header/SolutionMenuItems'
import Markets from './Header/Markets'
import Resources from './Header/Resources'
import { FaSearch } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi'
import { Navlogo } from '../assets'
import { FaBars } from 'react-icons/fa'
const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const handleHover = (menu) => {
    setHoveredItem(menu)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const renderSubMenu = () => {
    switch (hoveredItem) {
      case 'solutions':
        return (
          <div onMouseLeave={handleMouseLeave}>
            <SolutionMenuItems />
          </div>
        )
      case 'markets':
        return (
          <div onMouseLeave={handleMouseLeave}>
            <Markets />
          </div>
        )
      case 'resources':
        return (
          <div onMouseLeave={handleMouseLeave}>
            <Resources />
          </div>
        )
    }
  }
  return (
    <div className='w-full '>
      <div className='bg-[#545859] flex justify-end gap-5 text-white text-xs pr-10 py-1'>
        <p>Turtle Wax pro</p>
        <p className='flex items-center gap-2'>
          <span>
            <HiOutlineLogout />
          </span>
          Learning Center
        </p>
      </div>
      <div className='flex  items-center justify-between pl-10 border-b'>
        <img src={Navlogo} alt='' className='w-48 h-12' />

        <div className='flex items-center gap-6'>
          <ul className='list-none hidden md:flex items-center cursor-pointer '>
            <li className='border p-5 -skew-x-12 hover:bg-[#0b6392] duration-500 hover:text-white '>
              Home
            </li>
            <li
              className='border p-5 -skew-x-12 hover:bg-[#0b6392] duration-500 hover:text-white '
              onMouseEnter={() => handleHover('solutions')}
            >
              Solutions
            </li>
            {/* Repeat the same structure for other menu items */}
            <li
              className='border p-5 -skew-x-12 hover:bg-[#0b6392] duration-500 hover:text-white'
              onMouseEnter={() => handleHover('markets')}
            >
              Markets we share
            </li>
            <li
              className='border p-5 -skew-x-12 hover:bg-[#0b6392] duration-500 hover:text-white'
              onMouseEnter={() => handleHover('resources')}
            >
              Resources
            </li>
            <li className='border p-5 -skew-x-12 hover:bg-[#0b6392] duration-500 hover:text-white'>
              Contact
            </li>
            <li className='border p-5 -skew-x-12 hover:bg-[#0b6392] duration-500 hover:text-white'>
              Order Online
            </li>
            <li className='bg-[#0B6392] px-10 py-3 -skew-x-12 hover:bg-[#0b6392] duration-500 hover:text-white'>
              <FaSearch className='h-10 w-3 text-white hover:bg-[#0b6392] duration-500 hover:text-white  ' />
            </li>
          </ul>
        </div>
        <div className='block md:hidden px-5'>
          <FaBars className='size-8' />
        </div>
      </div>
      {renderSubMenu()}
    </div>
  )
}

export default Header

// {
//   hoveredItem === 0 && (
//     <div
//       onMouseLeave={handleMouseLeave}
//       className='max-w-screen-xl mx-auto  bg-white border border-gray-300 p-4'
//     >
//       {/* Add your submenu items here */}
//       <p>Submenu item 1</p>
//       <p>Submenu item 2</p>
//       <p>Submenu item 3</p>
//       <button>GO </button>
//     </div>
//   )
// }
