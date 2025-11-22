'use client'

import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { Button } from './button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'

export function ModeToggle() {
  const {setTheme} = useTheme() 

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
        >
          <FiSun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <FiMoon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}