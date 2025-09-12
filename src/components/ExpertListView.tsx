import React from 'react'
import ExpertListCard from './ExpertListCard'
import type { Expert } from './ExpertView'
import ContactSupportView from './ContactSupportView'

interface Props {
  experts: Expert[]
  professionData: string[]
  selectedProfession: string
  onSelectProfession: (profession: string) => void
}

const ExpertListView: React.FC<Props> = ({
  experts,
  professionData,
  selectedProfession,
  onSelectProfession
}) => {
  return (
    <section>
      <div className='container mx-auto px-5 lg:px-16 py-16 pb-32 grid gap-16'>
        <div className='grid gap-8'>
          <div className='px-2.5'>
            <div className='flex flex-wrap gap-2'>
              {professionData.map((profession) => {
                const isActive = profession === selectedProfession
                return (
                  <button
                    key={profession}
                    onClick={() => onSelectProfession(profession)}
                    className={`text-sm bg-white font-medium font-inter border py-3 px-6 rounded-2xl cursor-pointer flex-1 ${
                      isActive
                        ? 'text-[#2A2A2A] border-[#E6D671]'
                        : 'text-[#868484] border-[#E8E8E8]'
                    }`}
                  >
                    {profession}
                  </button>
                )
              })}
            </div>
          </div>
          <div className='grid gap-x-10 gap-y-11 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {experts.map((expert) => (
              <ExpertListCard key={expert.id} expert={expert} />
            ))}
          </div>
        </div>
        <ContactSupportView />
      </div>
    </section>
  )
}

export default ExpertListView
