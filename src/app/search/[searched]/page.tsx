import React from 'react'
import { NextPage } from 'next'
import { GetSearchData } from '../../../services/videos.services'
import Image from 'next/image'
import SearchedList from '../../../components/seo/SearchedList'

const SearchedPage:NextPage = async ( context) => {
  const searchData = await GetSearchData(context.params.searched)

  return (
    <>
      <SearchedList {...searchData} />
    </>
  )
};

export default SearchedPage;