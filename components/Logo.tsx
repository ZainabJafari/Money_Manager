import { PiggyBank } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <a href='/'  className='flex items-center gap-2'>
      <PiggyBank className='' />
      <p>MoneyManager</p>
    </a>
  )
}

export default Logo
