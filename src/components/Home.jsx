import React from 'react'
import img1 from '/img1.jpg'
import img2 from '/img2.jpg'
import img3 from '/img3.jpg'
import img4 from '/img4.jpg'
const Home = () => {
  return (

    <div id='Home' className="flex justify-center items-center min-h-screen p-4 bg-black bg-[url('')] ">
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 max-w-6xl ">
        <div className="relative shadow-md shadow-greenyellow h-[584px]">
            <img src={img1} alt="A dark fantasy character with large horns and a red background" className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <span className="bg-green-600 text-white text-lg  font-bold px-4 hover:bg-greenyellow cursor-pointer py-1 rounded">News</span>
                <h2 className="text-white text-2xl font-bold mt-2">Donec ornare massa ac feugiat rutrum</h2>
                <p className="text-gray-300 mt-1"> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
        </div>
        <div className="  gap-4 grid   ">
            <div className="relative shadow-md shadow-greenyellow max-h-[284px]">
                <img src={img2} alt="A battle scene with dragons and warriors" className="w-full h-full object-cover"/>
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                    <span className="bg-green-600 text-white text-lg  font-bold px-4 hover:bg-greenyellow cursor-pointer py-1 rounded">News</span>
                    <h2 className="text-white text-xl font-bold mt-2">Donec nisi enim, auctor nec odio sed</h2>
                    <p className="text-gray-300 mt-1">Aenean facilisis erat dapibus, fringilla mauris et, lacinia ligula. Sed risusque consequat rhoncus.</p>
                </div>
            </div>
            <div className="relative shadow-md shadow-greenyellow max-h-[284px]">
                <img src={img3} alt="A fantasy character with a sword" className="w-full h-full object-cover"/>
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                    <span className="bg-green-600 text-white text-lg  font-bold px-4 hover:bg-greenyellow cursor-pointer py-1 rounded">Guide</span>
                    <h2 className="text-white text-xl font-bold mt-2">Aliquam viverra risus elementum ultricies</h2>
                    <p className="text-gray-300 mt-1">Aenean facilisis erat dapibus, fringilla mauris et, lacinia ligula. Sed risusque consequat rhoncus.</p>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Home
