import React from 'react'
import { Link } from 'react-router-dom'

const ContactSupportView: React.FC = () => {
  return (
    <div className='grid gap-3.5 justify-center text-center pt-2.5'>
      <h3 className='text-kotumablue font-inter font-semibold text-[28px]'>
        Can't find what you're looking for?
      </h3>
      <Link
        to='/contact'
        className='text-kotumablue border border-kotumablue py-2.5 px-[18px] rounded-[1px] max-w-[300px] mx-auto'
      >
        Contact our support team
      </Link>
    </div>
  )
}

export default ContactSupportView
