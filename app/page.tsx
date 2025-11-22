import { ThemeToggle } from '@/components/ui/theme-toggle'

function HomePage() {
  return (
    <div className='bg-primary p-6'>
      <h1 className='text-white logo'>Leonardo</h1>
      <ThemeToggle />
    </div>
  )
}

export default HomePage
