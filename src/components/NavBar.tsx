import FetchAPI from "../api/FetchAPI"
import Restaurant from "../assets/Restaurant.png"

export default function NavBar(){


    const nav1 = [
        {title: "Pricing"},
        {title: "Recipes"},
        {title: "Cooklogue"}
    ]

        const nav2 = [
        {title: "Blog"},
        {title: "Community"},
        {title: "Meal Plan"}
    ]

    return(
        <>
        <div className="flex items-center justify-between py-2 px-40">
            <div className="flex items-center gap-5">
                {nav1.map((item) => (
                    <div key={item.title}>
                       <p>{item.title}</p> 
                    </div>
                ))}

            </div>

            <img src={Restaurant} alt="Restaurant icon by Icons8 </a>" className="w-[70px] h-[70px]"/>

            <div className="flex items-center gap-5">

            <div className="flex items-center gap-5">
                {nav2.map((items) => (
                    <div key={items.title}>
                        <p>{items.title}</p>
                    </div>
                ))}
            </div>

            <div className="gap-2 flex items-center">
                <button className="px-2 py-1 rounded-2xl border border-black">Login</button>
                <button className="px-2 py-1 rounded-2xl bg-[#fe8f35] text-white">Sign Up</button>
            </div>
            </div>

        </div>
        </>
    )
}