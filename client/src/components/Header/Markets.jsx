import React from 'react'

const marketsServed = [
  {
    id: 1,
    img: 'https://assets.website-files.com/63776c3780def900b2467641/638752f8811f6af11bb5b5df_photography_ontario-header.webp',
    name: 'Ontario',
  },
  {
    id: 2,
    img: 'https://assets.website-files.com/63776c3780def900b2467641/638db57d65555a32f91c101f_photography_alberta-header.webp',
    name: 'Alberta',
  },
  {
    id: 3,
    img: 'https://assets.website-files.com/63776c3780def900b2467641/63905b8ba2f3a203ea0d4c28_photography_north-america-header.webp',
    name: 'North America',
  },
  {
    id: 4,
    img: 'https://assets.website-files.com/63776c3780def900b2467641/639066701c91162f69e8c0b4_photography_rest-of-world-header-p-1600.webp',
    name: 'Europe',
  },
  {
    id: 5,
    img: 'https://assets.website-files.com/63776c3780def900b2467641/639b240d0a85d74c0770740f_photography_rest-of-world-header-p-2000.webp',
    name: 'Rest of the world',
  },
]
const Markets = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto  bg-white border border-gray-300 p-4'>
        <div className='grid  grid-cols-1  md:grid-cols-5 gap-4'>
          {marketsServed.map((market) => (
            <div key={market.id} className='relative'>
              <img src={market.img} alt='' className='h-72 ' />
              <div className='absolute bottom-0 '>
                {/* <img
                  src='https://assets.website-files.com/63776c3780def900b2467641/63932f521b8f227e9eb0d59f_background_nav-angle.png'
                  alt=''
                  className='w-72 h-52 opacity-85 '
                /> */}
                <div className=' w-[14.8rem] h-24  flex items-center justify-center opacity-75 bg-black'>
                  <h1 className='  text-md font-bold uppercase text-white '>
                    {market.name}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Markets
