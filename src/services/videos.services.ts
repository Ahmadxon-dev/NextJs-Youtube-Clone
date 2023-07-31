import { IRootVideo } from '../models/video.interface'
import { IChannelData } from '../models/ChannelData.interface'
import { IRelatedToVideo } from '../models/relatedToVideo'
import { ISearchData } from '../models/ISearchData'

const key = process.env.YOUTUBEDATA_API
const options: object = {

  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const Getvideo = async ():Promise<IRootVideo>=>{
  //https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyCGTXvMTTjpopGnVxgjyBF4DC9poxqNu0Y&part=snippet,statistics&maxResults=110&regionCode=RU
  const url = `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${key}&part=snippet,statistics&maxResults=110&regionCode=RU`;
  // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=110&type=video&key=${key}`
  const response = await fetch(url);
  const result = await response.json();
  return result
}
export const GetVideoById = async (videoId: string): Promise<IRootVideo> =>{
  //https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=ISTwed-RGPk&key=AIzaSyCGTXvMTTjpopGnVxgjyBF4DC9poxqNu0Y
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${key}`
  const response = await fetch(url)
  const result = await response.json()
  return result
}

export const GetChannelDetails = async (channelId:string):Promise<IChannelData>=>{
  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${key}`

  const response = await fetch(url)
  const result = await  response.json()
  return result
}

export const GetRelatedvideos = async (videoId:string): Promise<IRelatedToVideo> =>{
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${key}&maxResults=50`

  const response = await fetch(url)
  const result = await response.json()
  return result
}

export const GetSearchData = async (search:string) : Promise<ISearchData> =>{
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&maxResults=300&key=${key}`

  const response = await fetch(url)
  const result = await response.json()
  return result
}