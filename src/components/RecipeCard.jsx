import { Heart, HeartPulse, Search, Soup } from 'lucide-react'
import React from 'react'



const RecipeCard = ({ recipe,bg,badge }) => {
    console.log(recipe)
    if (!recipe) {
        return <p>Recipe not found</p>; // ถ้าไม่มีข้อมูลสูตร
    }
    return (

        <div div class={`${bg} flex flex-col rounded-md overflow-hidden p-3 relative`}>
            <a href={`https://www.youtube.com/results?search_query=${recipe.label} `} target="_blank" className='relative h-32'>
                <img src={recipe.image} alt='recipe img' className='rounded-md w-full h-full object-cover' />
                {/* servings */}
                <div className='pr-4 gap-1 text-sm flex items-center cursor-pointer p-1 left-2 bottom-2 rounded-full bg-white absolute'>
                    <Soup size={16} />
                    {recipe.yield} servings
                </div>
                {/* Like btn */}
                <div className='bg-white absolute text-white top-1 right-2 p-1 cursor-pointer rounded-full flex'>
                    <Heart size={24} className='hover:fill-red-500 hover:text-red-500 text-black' />
                </div>
            </a>
            <div className='mt-1'>
                <p className='font-bold tracking-wide'>{recipe.label}</p>
            </div>
            <p className='my-2' >
                {recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen

            </p>
            <div className="flex gap-2 mt-auto w-full">
                {([...recipe.healthLabels?.slice(0, 2) || [], "N/A", "N/A"].slice(0, 2)).map((label, index) => (
                    <div key={index} className={`flex w-1/2 ${badge} items-center gap-1 p-2 rounded-md justify-center`}>
                        <HeartPulse size={16} />
                        <span className="text-sm tracking-tighter font-semibold">{label}</span>
                    </div>
                ))}
            </div>




        </div >
    )
}

export default RecipeCard