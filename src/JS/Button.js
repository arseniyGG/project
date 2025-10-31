import React from 'react'

export default function Button({caption, type}) {
  return (
    <button className={type}><a href='#'>{caption}</a></button>
  )
}