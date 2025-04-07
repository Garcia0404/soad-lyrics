import React from 'react'

export default function AlbumsTitle({ title }: { title: string }) {
  return (
    <h2 className="text-5xl font-extrabold pt-20 pb-10">{title}</h2>
  )
}
