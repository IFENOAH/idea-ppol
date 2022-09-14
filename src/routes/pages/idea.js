import React from 'react'
import Button from '../../components/Forms/button'
import * as Icon from 'react-feather'
import EmptyState from '../../components/emptystate/emptystate'

const Ideas = () => {
  return (
    <div className='w-full h-full'>
        <header className='flex items-center justify-between border-b border-idpool-gray h-1/3 '>
            <h1 className='text-2xl font-light '>My Ideas</h1>
            <Button imgBefore={<Icon.Plus className='text-idpool-white' />} rounded bgColor = 'bg-idpool-main' color='text-idpool-white' />
        </header>
        <main className='flex w-full h-full flex items-center justify-center m-auto'>
            <EmptyState text='Got Ideas?' />
        </main>
    </div>
  )
}

export default Ideas