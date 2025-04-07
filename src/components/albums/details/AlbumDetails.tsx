import { Album, Tracks } from 'app/types'
import AlbumTitle from './title/AlbumTitle'
import AlbumReleaseYear from './release/AlbumReleaseYear'
import AlbumDescription from './description/AlbumDescription'
import TrackList from './tracks/TrackList'
import LyricsSection from './lyrics/LyricsSection'
interface Props {
  album: Album
  selectedSong: Tracks
}

export default function AlbumDetails({ album, selectedSong }: Props) {
  return (
    <div className='grid sm:grid-cols-2 py-5 gap-10 w-[min(100%,700px)] mx-auto'>
      <div>
        <AlbumTitle title={album.title} />
        <AlbumReleaseYear release_year={album.release_year} />
        <AlbumDescription description={album.description} />
        <TrackList tracks={album.tracks} selectedSong={selectedSong}/>
      </div>
      <div>
        <LyricsSection lyrics={selectedSong.lyrics} />
      </div>
    </div>
  )
}
