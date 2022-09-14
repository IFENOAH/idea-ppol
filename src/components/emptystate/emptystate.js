import React from 'react'

const EmptyState = ({text}) => {
  return (
    <div className='flex flex-col w-full h-full flex items-center justify-center m-auto'>
        <img style={{
            width: '200px',
            height: '200px',
        }} src = 'https://media.istockphoto.com/vectors/light-bulb-with-rays-shine-energy-and-idea-symbol-isolated-on-white-vector-id1266718523?k=20&m=1266718523&s=612x612&w=0&h=Unef881k3Pha8Sf5UCWtiahxTDZtwd_EtQ5Y_svszWA=' alt = 'empty' />
        <p className='text-lg font-light'>{text}</p>
    </div>
  )
}

export default EmptyState