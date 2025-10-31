import React from 'react'

export default function Button({caption, opacity}) {
  return (
    <button className='button' btnName={opacity}><a href='#'>{caption}</a></button>
  )
}