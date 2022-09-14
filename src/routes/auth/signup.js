import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Forms/button'

const SignUp = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center m-auto'>
        <div className='flex flex-col items-center justify-between space-y-8 w-1/2'>
            <header className='pb-4'>
                <h1 className='text-5xl font-light'>Sign Up</h1>
            </header>
            <form className='w-full flex flex-col items-start justify-between space-y-20'>
                <input className='w-full border-b border-idpool-black focus:outline-0 py-2' type = 'text' placeholder='Name' />
                <input className='w-full border-b border-idpool-black focus:outline-0 py-2' type = 'email' placeholder='Email' autoComplete='off' />
                <input className='w-full border-b border-idpool-black focus:outline-0 py-2' type = 'password' placeholder='Password' />

                <div className='w-full flex items-center justify-between'>
                    <Button bgColor = 'bg-idpool-main' children='SIGN UP' color='text-idpool-white' type = 'submit' />
                    <p>Already have an account? <Link to='/auth/log-in' className='text-idpool-main'>Log in</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp