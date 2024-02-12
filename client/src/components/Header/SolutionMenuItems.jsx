import React, { useState } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { ChemistryComponent, EquipmentComponent } from './SolutionMenuItemsDesc'
const solutions = [
  {
    id: 1,
    solution: 'Chemistry',
    desc: 'Powerful Cleaning Formulations',
  },
  {
    id: 2,
    solution: 'Equipment',
    desc: 'Delivering Exceptional performance',
  },
  {
    id: 3,
    solution: 'Digital Tech',
    desc: 'Powerful Cleaning Formulations',
  },
  {
    id: 4,
    solution: 'Service',
    desc: 'Delivering Exceptional performance',
  },
  {
    id: 5,
    solution: 'Distribution',
    desc: 'Powerful Cleaning Formulations',
  },
]

const SolutionMenuItems = () => {
  const [selectedSolution, setSelectedSolution] = useState(
    solutions.find((solution) => solution.solution === 'Chemistry')
  )
  console.log(selectedSolution)

  const handleSolutionClick = (solution) => {
    setSelectedSolution(solution)
  }
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto  bg-white border border-gray-300 p-4'>
        <div className='flex gap-3 p-5'>
          <div className='flex flex-col justify-between  gap-4'>
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className='flex items-center bg-[#F7F9FC] p-2 cursor-pointer'
                onClick={() => handleSolutionClick(solution)}
              >
                <div className='w-64'>
                  <h1 className='font-bold text-[#0a0d0e]'>
                    {solution.solution}
                  </h1>
                  <p className='font-thin text-xs'>{solution.desc}</p>
                </div>
                <div>
                  <MdKeyboardDoubleArrowRight className='text-[#25A6DC]' />
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className='w-[0.1px] h-auto border'></div>
          <div>
            {selectedSolution?.solution === 'Chemistry' && (
              <ChemistryComponent />
            )}
            {selectedSolution?.solution === 'Equipment' && (
              <EquipmentComponent />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionMenuItems
