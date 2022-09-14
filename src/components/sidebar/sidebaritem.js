import React from 'react'

const SidebarItem = () => {
  return (
    <div className='flex flex-col items-center justify-start space-y-4'>
      <img style={{backgroundColor: '#FFFFFF', borderRadius: '100px', width: " 50px", height: "50px", objectFit: "contain" }} width='50px' height = '50px' src= 'https://www.citypng.com/public/uploads/preview/hd-creative-green-light-bulb-idea-icon-clipart-png-31627615587mg9gk3jf2p.png' alt="logo" />
      <h2 className='text-idpool-white text-xl font-light'>Joyce Lee</h2>
      <span className='text-idpool-black py-2'>Log out</span>
    </div>
  )
}

export default SidebarItem