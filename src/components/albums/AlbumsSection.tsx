"use client"
import BackgroundImage from './background/BackgroundImage'
import albums from "../../../data/albums.json"
import AlbumsList from './list/AlbumsList'
import AlbumDetails from './details/AlbumDetails'
import AlbumsTitle from './list/title/AlbumsTitle'
import { useAlbumStore } from 'app/store/store'
export default function AlbumsSection() {
  const { selectedAlbum, setSelectedAlbum, selectedSong, setSelectedSong } = useAlbumStore()
  return (
    <section className="relative p-4 sm:p-10 flex flex-col gap-10">
      <BackgroundImage albumImg={selectedAlbum.title.toLowerCase().replace(/ /g, "_")} />
      <div className="relative z-0">
        <AlbumsTitle title="Albums" />
        <AlbumsList albums={albums} setSelectedAlbum={setSelectedAlbum} setSelectedSong={setSelectedSong} />
      </div>
      <AlbumDetails album={selectedAlbum} selectedSong={selectedSong} />
    </section>
  )
}
