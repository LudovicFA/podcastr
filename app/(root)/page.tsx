"use client"
import PodcastCard from "@/components/PodcastCard"
import { podcastData } from "@/constants"
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Home = () => {

  // const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1 ">Trending Podcast</h1>
        {/* <div className="text-white-1">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </div> */}
        <div className="podcast_grid">
          {podcastData.map(({description, id, imgURL, title}) => (

            <PodcastCard 
              key={id}
              imgUrl={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}

        </div>
      </section>
    </div>
  )
}

export default Home