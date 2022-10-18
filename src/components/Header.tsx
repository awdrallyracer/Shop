import React from 'react'

interface HeaderProps{
    title: string
}

export function Header({title}: HeaderProps){
    return(
        <header className='border py-2 px-4 border bg-blue-400'>
                <h1 className='text-center text-2xl'> {title} </h1>
        </header>
    )
}