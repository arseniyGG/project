import React from 'react'

export default function Button({caption, type, id, handler}) {
  return (
    <button className={type} id={id} onClick={handler}>{caption}</button>
  )
}