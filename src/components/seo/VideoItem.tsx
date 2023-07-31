import React, { FC, PropsWithChildren } from 'react'
import { IRootVideo, Item, Snippet } from '../../models/video.interface'
import Image from 'next/image'
import user from '../../../public/assets/user-icon.png'
import Link from 'next/link'

const VideoItem :FC<Item> = ({snippet,id }) => {
  // console.log(snippet.thumbnails.maxres.url)
  return (
    <Link href={`/video/${id}`}  className={`cursor-pointer`}>
        <Image priority={true}  className={` rounded-xl hover:rounded-none `} src={`${snippet.thumbnails.medium.url}`} alt={`image`} width={snippet.thumbnails.medium.width} height={snippet.thumbnails.medium.height} />
      <div className={`pt-3 flex justify-start`}>
        <div className={`mr-3`}>
          <Image src={user} alt={`user`} width={40} height={40}  />
        </div>
        <div>
          <p className={`text-white font-semibold text-sm w-[286px]`}>{snippet.title.length>64?snippet.title.toString().slice(0,60)+'...' : snippet.title}</p>
          <p className={`text-[#818181] text-xs `}>{snippet.channelTitle}</p>
        </div>
      </div>
    </Link>
  )
}

export default VideoItem