import React from 'react'

export default function AlbumReleaseYear({ release_year }: { release_year: number }) {
  return (
    <span className='text-xl text-red-400'>{release_year}</span>
  )
}
