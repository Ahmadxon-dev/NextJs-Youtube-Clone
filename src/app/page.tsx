import { Getvideo } from '../services/videos.services'
import VideoList from '../components/seo/VideoList'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <VideoList />
    </main>
  )
}

