import React, { useRef, useState } from 'react'
import Button from '../../components/Forms/button'
import * as Icon from 'react-feather'
import EmptyState from '../../components/emptystate/emptystate'

const Ideas = () => {
    const impactInputRef = useRef()
    const easeInputRef = useRef()
    const confidenceInputRef = useRef()

    const [inputList, setInputList] = useState([])

    const addIdeaInput = () => {
        const added = [...inputList, {index: inputList.length + 1,  input: '',  impact: '',  ease: '', confidence: '', editable: true}]
        setInputList(added)
    }

    const getInputValue = (event, index) => {
        const {name, value} = event.target
        changeInputList(index, name, value)
    }

    const removeIdea = (index) => {
        const deleteInput = [...inputList];
        const itemIndex = deleteInput.findIndex((input) => input.index === index);
        if(itemIndex < 0) throw new Error("item index not found.")
        deleteInput.splice(itemIndex, 1)
        setInputList(deleteInput)
    }

    const submitHandler = (event, index) => {
        event.preventDefault()
        changeInputList(index, 'editable', false);
    }

    const changeInputList = (index, key, value) => {
        const result = inputList.reduce((prev, current) => {
            if(current.index === index){
                prev.push({
                    ...current,
                    [key]: value
                })
            } else {
                prev.push(current)
            }
            return prev;
        }, [])
        setInputList(result)
    }

  return (
    <div className='w-full h-full px-12'>
        <header className='flex items-center justify-between border-b border-idpool-gray h-24'>
            <h1 className='text-2xl font-light '>My Ideas</h1>
            <Button imgBefore={<Icon.Plus className='text-idpool-white' />} rounded bgColor = 'bg-idpool-main' color='text-idpool-white' onClick={addIdeaInput} />
        </header>

        { inputList.length > 0 ? <main className='w-full pt-24 space-y-24' style={{ height: 'calc(100vh - 96px)'}} >
            {inputList.map((singleInput)=> {
                return (
                    <form className = 'w-full' onSubmit={submitHandler} key ={singleInput.index} >
                        <div className="w-full flex items-center justify-center space-x-6  px-16">
                            <input className= {`w-full ${singleInput.editable ? 'border-b border-idpool-gray' : '' } focus:outline-0 py-2`} 
                                type='input' id="text" value = {singleInput.input} 
                                name = 'input'
                                onChange = { e => getInputValue(e, singleInput.index)} readOnly = {!singleInput.editable} 
                            />
                
                            <div className="flex items-center justify-between space-x-6">
                                <div className="flex flex-col items-center justify-center">
                                    <label className="text-xs">Impact</label>
                                    <input
                                        style={{width: '45px'}}
                                        className={`${singleInput.editable ? "p-[5px] border bg-idpool-gray" : 'bg-none' } focus:outline-0`}
                                        type = "number"
                                        min ="1"
                                        max = "10"
                                        step = "1"
                                        defaultValue = "10"
                                        readOnly = ''
                                        ref  = {impactInputRef}
                                        // onChange = { e => getInputValue(e, index)}
                                    />
                                </div>
                
                                <div className="flex flex-col items-center justify-center">
                                    <label className="text-xs">Ease</label>
                                    <input
                                        style={{width: '45px'}}
                                        className={`${singleInput.editable ? "p-[5px] border bg-idpool-gray" : 'bg-none' } focus:outline-0`}
                                        type = "number"
                                        min ="1"
                                        max = "10"
                                        step = "1"
                                        defaultValue = "10"
                                        readOnly = {!singleInput.editable}
                                        ref  = {easeInputRef}
                                        // onChange = { e => getInputValue(e, index)}
                                    />
                                </div>
                
                                <div className="flex flex-col items-center justify-center">
                                    <label className="text-xs">Confidence</label>
                                    <input
                                        style={{width: '45px'}}
                                        className={`${singleInput.editable ? "p-[5px] border bg-idpool-gray" : 'bg-none' } focus:outline-0`}
                                        type = "number"
                                        min ="1"
                                        max = "10"
                                        step = "1"
                                        defaultValue = "10"
                                        readOnly = {!singleInput.editable}
                                        ref  = {confidenceInputRef}
                                        // onChange = { e => getInputValue(e, index)}
                                    />
                                </div>
                
                                <div className="flex flex-col items-center justify-center">
                                    <label className="text-sm font-medium">Avg.</label>
                                    <span>10</span>
                                </div>
                
                                {/* <Button imgAfter={<Icon.Check className="text-idpool-main" />} link />  */}
                                <button className='pr-4' type='submit' onClick={(event) => submitHandler(event, singleInput.index)}>
                                    <Icon.Check className='text-idpool-main' />
                                </button>

                                <button type='button' onClick={() => removeIdea(singleInput.index)}>
                                    <Icon.X className='text-idpool-red' />
                                </button>
                            </div>
                        </div>
                    </form>
                )
            })}
            </main> : null 
        }

       { inputList.length === 0 ? <div className='flex w-full items-center justify-center' style={{ height: 'calc(100vh - 96px)'}}>
            <EmptyState text='Got Ideas?' />
        </div> : null }

    </div>

  )
}

export default Ideas



// import clsx from 'clsx';
// import { forwardRef, HTMLProps, useState } from 'react';
// import S from './InlineEditInput.module.css';

// const InlineEditInput = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
//   ({ className, onBlur, onKeyDown, ...restProps }, ref) => {
//     const [isEditing, setIsEditing] = useState(false);
//     return (
//       <input
//         readOnly={!isEditing}
//         onClick={() => {
//           setIsEditing(true);
//         }}
//         onBlur={(e) => {
//         setIsEditing(false);
//           onBlur?.(e);
//         }}
//         onKeyDown={(e) => {
//           if (['Esc', 'Escape', 'Enter'].includes(e.key)) {
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             ((e.currentTarget || e.target) as any).blur();
//           }
//           onKeyDown?.(e);
//         }}
//         ref={ref}
//         className={clsx(className, S.base, isEditing && S.editing)}
//         {...restProps}
//       />
//     );
//   }
// );

// InlineEditInp
// InlineEditInput.displayName = 'InlineEditInput';

// export default InlineEditInput;