import React from 'react'

const SidebarHeader = () => {
  return (
    <div className='flex flex-col items-center justify-start space-y-4'>
      <img style={{backgroundColor: '#FFFFFF', borderRadius: '100px', width: " 50px", height: "50px", objectFit: "contain" }} width='50px' height = '50px' src= 'https://www.citypng.com/public/uploads/preview/hd-creative-green-light-bulb-idea-icon-clipart-png-31627615587mg9gk3jf2p.png' alt="logo" />
      <h2 className='text-idpool-white text-xl font-light'>The Idea Pool</h2>
    </div>
  )
}

export default SidebarHeader