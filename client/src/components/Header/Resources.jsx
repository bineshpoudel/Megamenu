import React from 'react'
import { FaComputer } from 'react-icons/fa6'
import { TbFileDatabase } from 'react-icons/tb'
import { GiHoneyJar } from 'react-icons/gi'

const Resources = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto  bg-white border border-gray-300 p-4'>
        <div className='grid-cols-3 grid gap-5 text-[#0B6392]'>
          {resourcesDetails.map((resource) => (
            <div
              key={resource.id}
              className='border-2 rounded-md p-10 flex flex-col gap-5 bg-[#F7F9FC] '
            >
              <div>
                <span className=' text-6xl'>{resource.icon}</span>
              </div>
              <h1 className='text-xl'>{resource.title}</h1>
              <p className='text-sm'>{resource.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resources
const resourcesDetails = [
  {
    id: 1,
    icon: <FaComputer />,
    title: 'Learning Center',
    desc: 'lorem  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ull doloremque perferendis.',
  },
  {
    id: 2,
    icon: <TbFileDatabase />,
    title: 'SDS Database',
    desc: 'lorem  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ull doloremque perferendis.',
  },
  {
    id: 3,
    icon: <GiHoneyJar />,
    title: 'Chemistry lab',
    desc: 'lorem  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ull doloremque perferendis.',
  },
]
