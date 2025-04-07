import React from 'react'

export default function LyricsSection({ lyrics }: { lyrics: string }) {
  return (
    <div className='lyrics bg-zinc-900/80 whitespace-pre-line text-white/60 rounded-md p-8 h-96 overflow-y-auto' style={{ scrollbarWidth: "none" }}>
      {lyrics}
    </div>
  )
}
