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
          
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}