"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
const TypeEffect = () => {
  return (
<div className='text-4xl font-Algera max-sm:text-3xl'>
        <Typewriter
          options={{
            strings: [
              'Hey There!, My name is',
              'const myName is = ( ) =>',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 150,
          }}
        />
      </div>
  )
}

export default TypeEffect
