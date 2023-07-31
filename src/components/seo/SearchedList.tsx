import React, { FC } from 'react'
import { IRootVideo } from '../../models/video.interface'
import SearchedItem from './SearchedItem'
import { ISearchData } from '../../models/ISearchData'
import { it } from 'node:test'

const SearchedList :FC<ISearchData>= ({items}) => {
  return (
    <ul className={`  flex flex-col justify-center items-center `}>
      {items.map(item=>{
        return <SearchedItem key={item.id.videoId} {...item} />
      })}
    </ul>
  )
}

export default SearchedList