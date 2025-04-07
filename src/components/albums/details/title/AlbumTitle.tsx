import React from 'react'

export default function AlbumTitle({ title }: { title: string }) {
  return (
    <h3 className='text-3xl'>{title}</h3>
  )
}
