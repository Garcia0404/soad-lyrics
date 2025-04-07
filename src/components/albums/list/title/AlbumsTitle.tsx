import React from 'react'

export default function AlbumsTitle({ title }: { title: string }) {
  return (
    <h2 className="text-5xl font-extrabold pt-20 pb-10 max-w-5xl mx-auto">{title}</h2>
  )
}
