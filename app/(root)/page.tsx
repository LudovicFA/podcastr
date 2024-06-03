"use client"
import PodcastCard from "@/components/PodcastCard"
import { podcastData } from "@/constants"
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Home = () => {

  const trendingPodcast = useQuery(api.podcast.getTrendingPodcasts);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1 ">Trending Podcast</h1>
      
        <div className="podcast_grid">
          {trendingPodcast?.map(({_id, imageUrl, podcastTitle, podcastDescription}) => (

            <PodcastCard 
              key={_id}
              imgUrl={imageUrl}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          ))}

        </div>
      </section>
    </div>
  )
}

export default Home