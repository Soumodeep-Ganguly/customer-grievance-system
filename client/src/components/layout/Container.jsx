import React from 'react'

export default function Container({ children }) {
    return (
        <div className="csContainer">
            <div className='flex w-full'>
                <div className='md:w-3/4 bg-slate-400'></div>
                <div className='md:w-2/4 w-full px-8 m-auto'>
                    <div className='md:w-2/3 m-auto'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
