import React from 'react'
import Button from '../../components/Forms/button'
import * as Icon from 'react-feather'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1, { replace: true })
    }

  return (
    <div className='w-full h-screen flex items-center justify-center m-auto'>
        <div className='flex flex-col items-center justify-between space-y-8 w-1/2'>
            <img style={{
                backgroundColor: 'white',
            }} src = 'https://img.freepik.com/premium-vector/illustration-error-404-page-found-with-confused-people-big-404-error-text_258153-322.jpg?w=2000' alt='404' />
            <p className='text-idpool-main font-medium text-xl'>Nothing to see here, pls go back</p>
            <Button onClick = {handleGoBack} bgColor = 'bg-idpool-main' children='Go Back' color='text-idpool-white' type = 'submit' imgBefore={<Icon.ArrowLeft className='text-idpool-white' />} />
        </div>
    </div>
  )
}

export default NotFound