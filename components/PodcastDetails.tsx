import Image from "next/image";
import React from "react";

const PodcastDetails = ({
  title,
  description,
  imgURL,
  podcastId,
}: {
  imgURL: any;
  title: string;
  description: string;
  podcastId: number;
}) => {
  return (
    <div className="cursor-pointer">
        <figure className="flex flex-col gap-2">
            <Image src={imgURL} width={174} height={174} alt={title} className="aspect-square h-fit w-full rounded-2xl 2xl:size-[200px]" />
            <div className="flex flex-col">
                <h1 className="text-16 font-bold text-white-1 truncate">{title}</h1>
                <h2 className=" text-12 font-normal capitalize truncate text-white-4">{description}</h2>
            </div>

        </figure>
      
    </div>
  );
};

export default PodcastDetails;
