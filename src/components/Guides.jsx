import React from 'react'
const { useState } = React;
import imo from '/imo.jpg'
import imo2 from '/imo2.jpg'
import imo3 from '/imo3.jpg'
import imo4 from '/imo4.jpg'
import imo5 from '/imo5.jpg'
import imo6 from '/imo6.jpg'
import imo7 from '/imo7.jpg'
import imo8 from '/imo8.jpg'
import roop1 from '/roop1.jpg'
import roop2 from '/roop2.jpg'
import roop3 from '/roop3.jpg'
import roop4 from '/roop4.jpg'
const stories = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        date: "August 2, 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
        image:imo,
    },
    {
        title: "Nulla finibus magna rhoncus iaculis",
        date: "August 2, 2023",
        description: "Nunc sagittis ipsum in mauris pharetra, vel auctor est rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum mauris id justo vulputate dolor consectetur nec.",
        image: imo2,
    },
    {
        title: "Nam ut purus venenatis lectus placerat",
        date: "August 2, 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
        image: imo3,
    },
    {
        title: "Aliquam viverra risus elementum ultricies",
        date: "August 2, 2023",
        description: "Cras ac erat enim. Praesent vitae facilisis nunc. In luctus ligula ut odio tempus euismod in ut ipsum, fringilla nulla. Praesent in metus id dui. Duis convallis dui nec elit interdum, sed dapibus orci pellentesque.",
        image: imo4,
    },
    {
        title: "Etiam suscipit mauris eu porttitor convallis",
        date: "August 2, 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
        image: imo5,
    },
    {
        title: "Sed rutrum magna non lacus pretium",
        date: "August 2, 2023",
        description: "Nam porttitor sit amet nulla eu aliquet. Duis sed efficitur odio, at lacinia felis. Integer rutrum eu eros eget egestas. In tempus tincidunt risus nec consectetur. Etiam vulputate in nibh sit amet fringilla.",
        image: imo6,
    },
    {
        title: "Cras elementum augue nec suscipit luctus",
        date: "August 2, 2023",
        description: "In id diam ante. Suspendisse neque nibh, laoreet eget tincidunt sed, euismod quis elit. Fusce porttitor urna in lacus dignissim venenatis. Aliquam viverra id diam at nibh feugiat eleifend vel non risus.",
        image: imo7,
    },
    {
        title: "Aliquam cursus nulla vel tortor tristique",
        date: "August 2, 2023",
        description: "Nam pretium bibendum lectus eget egestas. Donec ullamcorper lacus eu commodo vestibulum, ipsum sapien dignissim sit amet, sit amet congue nunc sapien in arcu.",
        image: imo8,
    },
];
const videos = [
    {
        title: "Integer condimentum urna urna, vel hendrerit enim tincidunt",
        image: roop1,
    },
    {
        title: "Sed rutrum magna non lacus pretium",
        image: roop2,
    },
    {
        title: "Aliquam viverra risus elementum ultricies",
        image: roop3,
    },
];


const Guides = () => {
  return (
    <div id='Guides' className="containe bg-black text-white lg:px-32
     px-8 py-6 pt-10">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl latest-stories-title mb-4">Latest <span className="text-white">Stories</span></h1>
                            {stories.map((story, index) => (
                                <div key={index} className="flex mb-6">
                                    <img src={story.image} alt={`Story ${index + 1}`} className="w-1/3 h-auto rounded-lg" />
                                    <div className="ml-4">
                                        <span className="guide-badge text-green-800 cursor-pointer border px-2 border-green-800 rounded-xl hover:text-red-600">Guide</span>
                                        <h2 className="text-xl font-bold mt-2">{story.title}</h2>
                                        <p className="text-sm mt-2">{story.description}</p>
                                        <p className="text-sm text-green-400 mt-2">{story.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full md:w-1/3 md:pl-8">
                            <div className="mb-8">
                                <div className="most-anticipated-badge font-bold text-2xl py-4">Most Anticipated</div>
                                <img src={roop4} alt="Most Anticipated" className="w-full h-auto rounded-lg mt-4" />
                                <h2 className="text-2xl font-bold mt-4">Baldur's Gate 3</h2>
                                <p className="text-sm mt-2"><strong>Release Date:</strong> August 3, 2023</p>
                                <p className="text-sm mt-2"><strong>Developer:</strong> Larian Studios</p>
                                <p className="text-sm mt-2"><strong>Genre:</strong> Role-playing video game</p>
                                <p className="text-sm mt-2"><strong>Platforms:</strong> <i className="fab fa-windows"></i> <i className="fab fa-playstation"></i> <i className="fab fa-xbox"></i></p>
                            </div>
                            <h2 className="text-2xl latest-stories-title mb-4 font-bold">What to <span className="underline text-greenyellow underline-offset-4">Watch</span></h2>
                            {videos.map((video, index) => (
                                <div key={index} className="mb-6">
                                    <div className="relative">
                                        <img src={video.image} alt={`Video ${index + 1}`} className="w-full h-full rounded-lg" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="play-button">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold mt-2">{video.title}</h3>
                                </div>
                            ))}
                            <button className="bg-green-500 text-black font-bold py-2 px-4 rounded-lg mt-4">More Videos</button>
                        </div>
                    </div>
                </div>
  )
}

export default Guides
