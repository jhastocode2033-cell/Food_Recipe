import ramen from "../assets/ramen.png"
import rice from "../assets/rice.png"

export default function Hero(){

    return(
        <>
        <div className="bg-[#f6f6f6] flex items-center justify-between gap-8 px-12 py-10">
        <div className="w-1/4">
            <img src={ramen} alt="A bowl of ramen" className="w-full" />
        </div>

        <div className="flex-1 text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            DISCOVER,
            <br />
            CREATE AND SHARE
            <br />
            RECIPES EFFORTLESSLY!
            </h1>

            <p className="font-body text-base md:text-lg text-gray-600 mt-5 max-w-xl mx-auto">
            Create meal plans, explore community recipes, turn a photo into a recipe.
            No cooking guesswork, just culinary inspiration.
            </p>

            <div className="flex justify-center gap-4 mt-6">
            <button className="font-medium px-5 py-3 bg-[#fe8f35] rounded-2xl text-white">
                View Recipes
            </button>

            <button className="font-medium px-5 py-3 rounded-2xl border border-black">
                Sign Up
            </button>
            </div>
        </div>

        <div className="w-1/4">
            <img src={rice} alt="A bowl of rice" className="w-full" />
        </div>
        </div>
        </>
    )
}