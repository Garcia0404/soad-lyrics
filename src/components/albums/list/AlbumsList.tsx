"use client"
import { Album, Tracks } from "app/types";
import AlbumCard from "./item/AlbumCard";
import { useState } from "react";
interface Props {
  albums: Album[]
  setSelectedAlbum: (album: Album) => void
  setSelectedSong: (song: Tracks) => void
}

export default function AlbumsList({ albums, setSelectedAlbum, setSelectedSong }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleAlbumClick = (album: Album, index: number) => {
    setSelectedAlbum(album)
    setSelectedSong(album.tracks[0])
    setCurrentIndex(index)
  };
  return (
    <ul className="flex gap-2 justify-between albums__list">
      {albums.map((album, index) => (
        <AlbumCard key={album.title} album={album} index={index} callback={handleAlbumClick} currentIndex={currentIndex} />
      ))}
    </ul>
  )
}
