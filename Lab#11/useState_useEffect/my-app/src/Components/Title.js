import React, { useState, useEffect } from 'react'
import './Title.css'

function Title () {
  const [value, setValue] = useState('abc')

  // in the second parameter of useEffect, provide the dependencies array
  // when a dependency changes, the callback (first parameter) runs again
  useEffect(() => {
    document.title = `${value}`
  }, [value])

  return (
    <div className='title'>
      <p>Change page title:</p>
      {/* e.target.value gives us the current input content 
      Setting a value attribute isn't necessary, but it's usually a good idea.
      Putting a value attribute makes the input controlled, which means that the
      value in the input will always exactly correspond to what's in the React
      state, which will make the program's logic easier to reason about. */}
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default Title
