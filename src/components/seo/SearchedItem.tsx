import React, { FC } from 'react'
import { Item } from '../../models/ISearchData'
import Image from 'next/image'
import Link from 'next/link'

const SearchedItem :FC<Item>= ({snippet,id}) => {

  return (
    <Link href={`/video/${id.videoId}`} className="flex  pb-5" >
        <Image
          src={snippet.thumbnails.medium.url}
          width={320}
          height={180}
          className={`rounded-2xl`}
          alt="image"
          objectFit="cover"
          priority={true}
        />
      <div className="pl-3 pt-1 w-1/2">
        <p className="text-white text-lg">
          {snippet.title.split('').length > 67 ? snippet.title.slice(0,67)+'...' : snippet.title}
        </p>
        <p className="text-[#818181] text-sm">
          {snippet.publishedAt.split("T")[0]}
        </p>
      </div>
    </Link>
  )
}

export default SearchedItem