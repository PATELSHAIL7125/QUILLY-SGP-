// Navbar.tsx
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './components/ui/button'
import { ArrowRight } from 'lucide-react'
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async () => {
  // Mark component as async to allow awaiting the session
  let user;
  
  try {
    const { getUser } = getKindeServerSession()
    user = getUser()
  } catch (error) {
    console.error("Error with Kinde authentication:", error)
    user = null
  }

  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between'>
          <Link
            href='/'
            className='flex z-40 font-semibold'>
            <span>quill.</span>
          </Link>

          <div className='flex items-center space-x-4'>
            {!user ? (
              <>
                <Link
                  href='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Pricing
                </Link>
                <LoginLink className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                  Sign in
                </LoginLink>
                <RegisterLink className={buttonVariants({
                  size: 'sm',
                })}>
                  Get started{' '}
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </RegisterLink>
              </>
            ) : (
              <>
              <Link
                  href='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Pricing
                </Link>
                <LoginLink className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                  Sign in
                </LoginLink>
                <RegisterLink className={buttonVariants({
                  size: 'sm',
                })}>
                  Get started{' '}
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </RegisterLink>
                <Link
                  href='/dashboard'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar