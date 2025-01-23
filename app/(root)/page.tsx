"use client"
import PodcastDetails from '@/components/PodcastDetails'
import { podcastData } from '@/constants'
import React from 'react'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


const Home = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending podacasts</h1>
        <div className="flex min-h-screen flex-col items-center justify-between text-white-1 p-24">
       {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
       </div>
    
      <div className='podcast_grid'>
      {podcastData.map(({id,title,description,imgURL}) => (
        <PodcastDetails key={id} podcastId={id} imgURL={imgURL} title={title} description={description}/>
      ))}

      </div>
      
      </section>
      
    </div>
  )
}

export default Home