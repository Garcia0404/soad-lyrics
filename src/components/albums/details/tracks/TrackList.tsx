import { Tracks } from 'app/types'
import TrackItem from './TrackItem'
import { useAlbumStore } from 'app/store/store'
interface Props {
  tracks: Tracks[]
  selectedSong: Tracks
}
export default function TrackList({ tracks, selectedSong }: Props) {
  const { setSelectedSong } = useAlbumStore()
  return (
    <ul className='grid grid-cols-2 gap-1 ps-4 pt-4'>
      {
        tracks.map(song => (
          <TrackItem key={song.title} song={song} setSelectedSong={setSelectedSong} selectedSong={selectedSong} />
        ))
      }
    </ul>
  )
}
