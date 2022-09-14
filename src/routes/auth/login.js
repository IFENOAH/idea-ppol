import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Forms/button'

const LogIn = () => {
    const navigate = useNavigate();

    const Login = () => {
        navigate('/ideas')
    }

  return (
    <div className='w-full h-screen flex items-center justify-center m-auto'>
        <div className='flex flex-col items-center justify-between space-y-8 w-1/2'>
            <header className='pb-4'>
                <h1 className='text-5xl font-light'>Log In</h1>
            </header>
            <form className='w-full flex flex-col items-start justify-between space-y-20'>
                <input className='w-full border-b border-idpool-black focus:outline-0 py-2' type = 'email' placeholder='Email' autoComplete='off' />
                <input className='w-full border-b border-idpool-black focus:outline-0 py-2' type = 'password' placeholder='Password' />

                <div className='w-full flex items-center justify-between'>
                    <Button onClick={Login} bgColor = 'bg-idpool-main' children='LOG IN' color='text-idpool-white' type = 'submit' />
                    <p>Dont have an account? <Link to='/' className='text-idpool-main'>Create an account</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LogIn