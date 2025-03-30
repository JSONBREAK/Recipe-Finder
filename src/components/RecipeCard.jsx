import { Heart, HeartPulse, Search, Soup } from 'lucide-react'
import React from 'react'

const RecipeCard = () => {
    return (
        <div div class="bg-[#ecf7d4] flex flex-col rounded-md overflow-hidden p-3 relative" >
            <a href='#' className='relative h-32'>
                <img src='/1.jpg' alt='recipe img' className='rounded-md w-full h-full object-cover' />
                {/* servings */}
                <div className='pr-4 gap-1 text-sm flex items-center cursor-pointer p-1 left-2 bottom-2 rounded-full bg-white absolute'>
                    <Soup size={16} />
                    4 servings
                </div>
                {/* Like btn */}
                <div className='bg-white absolute text-white top-1 right-2 p-1 cursor-pointer rounded-full flex'>
                    <Heart size={24} className='hover:fill-red-500 hover:text-red-500 text-black' />
                </div>
            </a>
            <div className='mt-1'>
                <p className='font-bold tracking-wide'>Whispering Willow Gnocchi</p>
            </div>
            <p className='my-2'>Mexican Kitchen</p>

            <div class="flex gap-2 mt-auto">
                <div class="flex w-1/2 bg-[#bdff9b] items-center gap-1">
                    <HeartPulse size={14} />
                    <span className='text-sm tracking-tighter font-semibold'>Sugar-Conscious</span>
                </div>
                <div class="flex w-1/2 bg-[#bdff9b] items-center  text-sm gap-1">
                    <HeartPulse size={14} />
                    <span className='text-sm tracking-tighter font-semibold'>Keto-Friendly</span>
                </div>
            </div>
        </div >
    )
}

export default RecipeCard