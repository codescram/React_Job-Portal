import React from 'react'

export const RadiobuttonGroup = ({ label, option, value, onChange }) => {
    console.log(option)
    return (
        <div className="flex flex-col">
            <h3 className="w-full  text-white mb-3">{label}</h3>
            <div className='flex flex-row mb-3 space-x-4'>
                {
                    option.map((item) => (
                        <label htmlFor={item.value} key={item.value} className={`cursor-pointer transition-all duration-200 ease-in-out text-center w-2/3 text-white border rounded p-2 ${value === item.value ? 'bg-gray-600 text-white' : 'bg-white/3'}`}>
                            <input className='hidden'
                                id={item.value}
                                type="radio"
                                name={label}
                                value={item.value}
                                checked={value === item.value}
                                onChange={onChange}
                            />
                            {item.label}
                        </label>
                    ))
                }
            </div>
        </div>
    )
}
