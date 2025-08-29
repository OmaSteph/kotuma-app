import React from 'react'
import BookmarkIcon from '@assets/bookmark-icon.png'
import type { Expert } from './ExpertView'

const ExpertListCard: React.FC<{ expert: Expert }> = ({ expert }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 h-[395px] relative bg-cover bg-center`}
      style={{ backgroundImage: `url(${expert.imageUrl})` }}
    >
      <img
        src={BookmarkIcon}
        width={40}
        height={40}
        className='absolute right-6'
      />
      <div className='bg-[#F7F7F3] rounded-[12px] p-6 flex justify-between items-center absolute bottom-6 left-6 right-6'>
        <div>
          <h3 className='text-sm font-medium font-inter text-[#2A2A2A]'>
            {expert.name}
          </h3>
          <p className='text-sm font-inter text-[#6C6C68]'>
            {expert.profession}
          </p>
        </div>
        <p className='text-sm font-inter text-[#6C6C68]'>{expert.location}</p>
      </div>
    </div>
  )
}

export default ExpertListCard
