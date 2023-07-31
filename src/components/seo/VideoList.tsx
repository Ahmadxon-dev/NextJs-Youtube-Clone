import React, { FC, PropsWithChildren } from 'react'
import { GetChannelDetails, Getvideo } from '../../services/videos.services'
import VideoItem from './VideoItem'

const VideoList :FC<PropsWithChildren>= async () => {
  const data = await Getvideo()
  return (
    <ul className={`grid gap-5 mx-auto justify-center  xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 `}>
      {data.items.map( item=>{
        return <VideoItem key={item.id} {...item}  />
      })}
    </ul>
  )
}

export default VideoList