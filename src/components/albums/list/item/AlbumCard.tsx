"use client"
import { Album } from 'app/types';
import Image from 'next/image';
interface Props {
  album: Album
  index: number
  callback: (album: Album, currentIndex: number) => void
  currentIndex: number
}
export default function AlbumCard({ album, index, callback, currentIndex }: Props) {
  return (
    <li id={index.toString()}
      className={`rounded-sm overflow-hidden ${index === currentIndex ? "brightness-90" : "brightness-50"} transition-all duration-300`}
      onClick={() => callback(album, index)}>
      <Image
        src={`/albums/${album.title.toLowerCase().replace(/ /g, "_")}.webp`}
        width={300}
        height={300}
        alt={`album-${album.title}`}
        className='cursor-pointer transition-transform duration-300 hover:scale-105'
      />
    </li>
  )
}
