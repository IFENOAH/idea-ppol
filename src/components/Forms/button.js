import React from 'react'

const Button = ({imgBefore, children, imgAfter, link, color, bgColor, rounded, onClick }) => {

  return (
    <button onClick={onClick} className={`flex items-center justify-center ${link ? '' : 'bg-vencru-white'}
      rounded-none
      ${bgColor ? bgColor : '' }
      ${rounded ? 'rounded-full p-[10px]' : 'px-8 py-[10px]'}
      ${link ? '' : 'border-none'} ${link ? '' : 'py-[10px]'}
      `}
    >
      {imgBefore}
      <h2 className={` ${color ? color : 'text-vencru-darkgray'} text-sm `} >
          {children}
      </h2>
      {imgAfter}
    </button>
  )
}

export default Button