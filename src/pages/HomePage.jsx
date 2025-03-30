import { Heart, HeartPulse, Search, Soup } from 'lucide-react'
import React from 'react'
import RecipeCard from '../components/RecipeCard';



const HomePage = () => {
    return (
        <div className="bg-[#faf9fb] p-10 flex-1 ">
            <div className="max-w-screen-lg mx-auto bg-amber-50">
                <form className='bg-amber-400'>
                    <label className="input shadow-md flex items-center gap-2 w-full">
                        <Search size={24} />
                        <input
                            type="text"
                            className="text-sm md:text-md grow"
                            placeholder="What do you want to cook today?"
                        />
                    </label>
                </form>

                <h1 className="font-bold text-3xl md:text-5xl mt-4">
                    Recommended Recipes
                </h1>
                <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
                    Popular choices
                </p>

                <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2">
                    {/* Card(BG) */}
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <div class="bg-blue-500 bg-[#ecf7d4] flex flex-col rounded-md overflow-hidden p-3 relative">Item 2</div>
                    <div class="bg-red-500 bg-[#ecf7d4] flex flex-col rounded-md overflow-hidden p-3 relative">Item 2</div>
                    <div class="bg-green-500 bg-[#ecf7d4] flex flex-col rounded-md overflow-hidden p-3 relative">Item 3</div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;