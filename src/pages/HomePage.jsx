import { Heart, HeartPulse, Search, Soup } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { getRandomColor } from '../../lib/utils';

// developer.edamam
const App_ID = import.meta.env.VITE_APP_ID;
const App_Keys = import.meta.env.VITE_APP_ID_APP_KEY;
const User = import.meta.env.VITE_EDAMAM_USER;

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const fetchRecipes = async (searchQuery) => {
        setLoading(true); // ต้อง set loading เป็น true ก่อนเริ่มการดึงข้อมูล
        setRecipes([]); // รีเซ็ตรายการสูตรอาหารก่อนการค้นหาใหม่

        try {
            const res = await fetch(
                `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${App_ID}&app_key=${App_Keys}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Edamam-Account-User': User,
                        'Accept-Language': 'en',
                    },
                }
            );

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            // console.log(data.hits)
            setRecipes(data.hits); // เซ็ตข้อมูลสูตรอาหารที่ได้จาก API

        } catch (error) {
            console.log(`Error: ${error.message}`); // แสดงข้อความข้อผิดพลาด
        } finally {
            setLoading(false); // ปิดสถานะการโหลดหลังจากทำงานเสร็จ
        }
    };




    useEffect(() => {
        fetchRecipes("chicken");
    }, []);

    return (
        <div className="bg-[#faf9fb] p-10 flex-1">
            <div className="max-w-screen-lg mx-auto ">
                <form
                    className="bg-amber-400"
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetchRecipes(searchQuery);
                    }}
                >
                    <label className="input shadow-md flex items-center gap-2 w-full">
                        <Search size={24} />
                        <input
                            type="text"
                            className="text-sm md:text-md grow"
                            placeholder="What do you want to cook today?"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setSearchQuery(e.target.value)
                                    // console.log("Searching for:", e.target.value);
                                }
                            }}
                        />
                    </label>
                </form>

                <h1 className="font-bold text-3xl md:text-5xl mt-4">
                    Recommended Recipes
                </h1>
                <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular choices</p>

                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {!loading && recipes.map(({ recipe }, index) => (
                        <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />

                    ))}

                    {loading &&
                        [...Array(9)].map((_, index) => (
                            <div key={index} className='flex flex-col gap-4 w-full'>
                                <div className='skeleton h-32 w-full'></div>
                                <div className='flex justify-between'>
                                    <div className='skeleton h-4 w-28'></div>
                                    <div className='skeleton h-4 w-24'></div>
                                </div>
                                <div className='skeleton h-4 w-1/2'></div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default HomePage;
