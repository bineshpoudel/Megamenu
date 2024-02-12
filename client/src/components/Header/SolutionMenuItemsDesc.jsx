import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
const chemistryImages = [
  {
    id: 1,
    img: 'https://assets.website-files.com/63776c3780def900b2467641/639aed0970637a51fde3103d_background_autolux-nav.png',
    bg: 'https://assets.website-files.com/63776c3780def900b2467641/63849e0c2fb3c6cb0055bce2_photography_autolux-header-p-1600.jpg',
  },
  {
    id: 2,
    img: 'https://assets.website-files.com/63776c3780def900b2467641/639af02c56d3526f4927c017_background_twp-nav.png',
    bg: 'https://assets.website-files.com/63776c3780def900b2467641/638dedf798d5bb51d5323fa5_photography_cta-section-p-800.webp',
  },
  {
    id: 3,
    img: 'https://assets.website-files.com/63776c3780def900b2467641/639aed0970637a51fde3103d_background_autolux-nav.png',
    bg: 'https://assets.website-files.com/63776c3780def900b2467641/63849e0c2fb3c6cb0055bce2_photography_autolux-header-p-1600.jpg',
  },
  {
    id: 4,
    img: 'https://assets.website-files.com/63776c3780def900b2467641/639af02c56d3526f4927c017_background_twp-nav.png',
    bg: 'https://assets.website-files.com/63776c3780def900b2467641/638dedf798d5bb51d5323fa5_photography_cta-section-p-800.webp',
  },
]

const equipmentImages = [
  {
    img: 'https://assets.website-files.com/63776c3780def900b2467641/639afac4d9f8082c49206995_background_soax-nav.png',
  },
  {
    img: 'https://assets.website-files.com/63776c3780def900b2467641/639afbbb23427476ab03a588_background_clear-wash-nav.png',
  },
  {
    img: 'https://assets.website-files.com/63776c3780def900b2467641/639afa9d5c967fbaa59940a9_photography_soax-nav-p-500.webp',
  },
]
export const ChemistryComponent = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-[#25A6DC] uppercase text-sm'>Featured Brands</h1>
      <div className='grid grid-cols-4 gap-5'>
        {chemistryImages.map((image) => (
          <div
            style={{
              backgroundImage: `url(${image.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right',
            }}
            className='h-72 w-52 object-fill  '
          >
            <div>
              <img src={image.img} alt='' className='h-72 w-52 opacity-[90%]' />
            </div>
            <img src='' alt='' />
          </div>
        ))}
      </div>

      <div className='flex items-center gap-2 text-[#0B6392]'>
        <hr className='h-10 w-1 bg-[#3EB049]' />
        See all chemistry products
        <MdKeyboardDoubleArrowRight className='text-[#25A6DC]' />
      </div>
    </div>
  )
}

export const EquipmentComponent = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-[#25A6DC] uppercase text-sm'>Equipment Services</h1>
      <div className='grid grid-cols-4 gap-5'>
        {equipmentImages.map((image) => (
          <div className='bg-red-500'>
            <img src={image.img} className='size-60' />
          </div>
        ))}
      </div>

      <div className='flex items-center gap-2 text-[#0B6392]'>
        <hr className='h-10 w-1 bg-[#3EB049]' />
        See all equipment products
        <MdKeyboardDoubleArrowRight className='text-[#25A6DC]' />
      </div>
    </div>
  )
}
