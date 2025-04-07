import { Tracks } from 'app/types'
import React from 'react'
interface Props {
  song: Tracks
  setSelectedSong: (song: Tracks) => void
  selectedSong: Tracks
}
export default function TrackItem({ song, setSelectedSong, selectedSong }: Props) {
  const handleClick = () => {
    if (selectedSong === song) return
    setSelectedSong(song)
  }
  return (
    <li onClick={handleClick}
      className={`cursor-pointer flex gap-1.5 items-center ${selectedSong.title == song.title ? "text-red-500" : ""} hover:text-red-500 active:text-red-400 group/item transition-colors`}>
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fb2c36" className="size-4 min-w-4 opacity-0 group/edit group-hover/item:opacity-100 duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      <span className='line-clamp-1'>{song.title}</span>
    </li>
  )
}
