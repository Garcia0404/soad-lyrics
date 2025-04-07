import React from 'react'

export default function Hero() {
  return (
    <main className='overflow-hidden relative'>
      <video className='h-dvh -z-10 w-full object-cover mask-b-from-5%' src="./soad_bg.mp4" autoPlay loop playsInline muted></video>
      <h1 className='w-full h-full sm:mix-blend-difference absolute top-0 z-10 p-4 sm:p-10 grid place-content-center'>
        <picture className='w-full'>
          <source media="(min-width: 640px)" srcSet="/soad_logo.webp" width={764} height={600} />
          <source media="(max-width: 640px)" srcSet="/soad_logo_mobile.webp" width={600} height={600}/>
          <img className='mx-auto w-full h-min object-contain' fetchPriority='high' src="imagen-movil-completa.jpg" alt="soad_logo" />
        </picture>
      </h1>
    </main>
  )
}
