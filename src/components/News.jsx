import React from 'react';

const News = () => {
  return (
    <div id='News' className="text-white p-8 md:p-12 lg:p-16 bg-black">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl pt-10">
        <span className="text-green-500">Popular</span> This Week
      </h1>
      <div className="border-b-4 border-green-500 w-16 my-4 md:w-24 md:my-6 lg:w-32 lg:my-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="relative min-h-56 shadow-md shadow-greenyellow">
        <video src='' autoPlay muted className='w-full h-full object-fill'></video>
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
            <span className="bg-green-500 hover:bg-greenyellow px-4 text-black cursor-pointer py-1 rounded">News</span>
            <h2 className="text-2xl font-bold mt-2 md:text-3xl lg:text-4xl">Aliquam viverra risus elementum</h2>
            <p className="text-sm md:text-base lg:text-lg">Lorem ipsum dolor sit amet, didunt ut labore et dolore magna aliqua. Quis ipsum .</p>
          </div>
        </div>
        <div className="relative min-h-56 shadow-md shadow-greenyellow">
        <video src='' className='h-full w-full object-fill' autoPlay muted></video>
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
            <span className="bg-green-500 hover:bg-greenyellow px-4 text-black cursor-pointer py-1 rounded">News</span>
            <h2 className="text-2xl font-bold mt-2 md:text-3xl lg:text-4xl">Donec nisi enim, </h2>
            <p className="text-sm md:text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur </p>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <i className="fas fa-play-circle text-green-500 text-6xl md:text-8xl lg:text-10xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;