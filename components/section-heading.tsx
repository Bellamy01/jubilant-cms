import React from 'react'

export default function SectionHeading({ title } : { title: string }) {
  return (
    <h2 className='text-2xl font-bold'>{title}</h2>
  )
}
