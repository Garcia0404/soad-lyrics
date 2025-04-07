import Image from "next/image";

export default function BackgroundImage({ albumImg }: { albumImg: string }) {
  return (
    <>
      <Image width={400} height={400}
        className='absolute inset-0 -z-20 mask-t-from-5% h-full w-full object-cover transition-opacity duration-300'
        src={`/albums/${albumImg}.webp`}
        alt="album_bg" />
      <div className="absolute inset-0 -z-10 bg-black/50 backdrop-blur-2xl"></div>
    </>
  )
}
