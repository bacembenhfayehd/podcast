import React from 'react'

const PodcastDetails = ({params} : {params : {podcastId : string}}) => {
  return (
    <p className='text-white-1 text-20 font-bold'>PodcastDetails for {params.podcastId}</p>
  )
}

export default PodcastDetails