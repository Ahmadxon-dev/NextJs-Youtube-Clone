import React, { FC } from 'react'
import { Item } from '../../models/relatedToVideo'
import Image from 'next/image'
import Link from 'next/link'

const ForEachRelatedToVideo :FC<Item>= ({snippet,id}) => {
  return (
    <Link href={`/video/${id.videoId}`} className={`flex justify-center items-center pb-3`}>
      <div>
        <Image className={`rounded-xl`} priority={true} src={snippet.thumbnails.medium.url} alt={`imagw`} width={172} height={97} />
      </div>
      <div className={`pl-2`}>
        <p className={`text-sm w-52 pb-2`}>{snippet.title.split('').length>48 ? snippet.title.slice(0,49)+ '...' : snippet.title}</p>
        <p className={`text-[14px] text-[#818181]`}>{snippet.channelTitle}</p>
      </div>
    </Link>
  )
}

export default ForEachRelatedToVideo