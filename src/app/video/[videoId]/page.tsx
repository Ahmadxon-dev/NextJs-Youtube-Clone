import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { GetChannelDetails, GetRelatedvideos, GetVideoById } from '../../../services/videos.services'
import Image from 'next/image'
import like from '../../../../public/assets/like.png'
import { data } from 'autoprefixer'
import { it } from 'node:test'
import ForEachRelatedToVideo from '../../../components/seo/ForEachRelatedToVideo'
interface ContextProps {
  params: {
    videoId:string
  }
}
const EachVideoPage :NextPage<ContextProps>=async (context) => {
  // @ts-ignore
  const videoData = await GetVideoById(context.params.videoId)
  const channelId = videoData.items[0].snippet.channelId
  const channelData = await GetChannelDetails(channelId)
  const videoDetails = videoData.items[0]
  const channelDetails = channelData.items[0]
  const dataRelatedToVideo = await GetRelatedvideos(context.params.videoId)
  console.log(dataRelatedToVideo)

  return (
    <div className={`flex justify-evenly   `}>
      <div>
        <iframe width="1180" height="673" src={`https://www.youtube.com/embed/${context.params.videoId}?autoplay=1`} title="YouTube video player"
                   frameBorder="0"
                   allow="autoplay; "
                   allowFullScreen></iframe>
        <p className={`font-bold text-xl pt-4 text-white`}>{videoDetails.snippet.title}</p>
        <div className={`flex justify-between items-center`}>
          <div className={`flex items-center pt-4`}>
            <div>
              <Image className={`rounded-3xl`} src={channelDetails.snippet.thumbnails.high.url} alt={`image`} width={40} height={45} />
            </div>
            <div className={`block pl-2`}>
              <p className={`text-white font-bold text-lg`}>{channelDetails.snippet.title}</p>
              <p className={`text-[#919191]`}>{channelDetails.statistics.subscriberCount} подписчиков</p>
            </div>
          </div>
          <div>
            <button className={`text-white bg-[#282929] px-2.5 py-2 rounded-2xl flex justify-around items-center`} type={'button'}><Image className={`mr-2`} src={like} alt={`like`} width={25} height={35}/> {videoDetails.statistics.likeCount}</button>
          </div>
        </div>
      </div>
      <div className={`text-white pr-10`}>
        { !dataRelatedToVideo? <h2>Loading...</h2> : dataRelatedToVideo.items.map(item=>{
          return <ForEachRelatedToVideo key={item.id.videoId} {...item} />
        })}
      </div>
    </div>
  )
}

export default EachVideoPage