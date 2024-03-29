import React from 'react'
import useCustomHook from './useCustomHook'

const Demo = () => {
    const value=useCustomHook()
  return (
    <div>
      demo{value}
    </div>
  )
}

export default Demo
