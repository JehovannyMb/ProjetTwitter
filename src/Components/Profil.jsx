import Tweet from '../tweets-x.json'
import { NavLink, Outlet } from "react-router-dom"
import MonApi from '../MonApi'


export default function Profil(props) {

    return (
        <div className=" h-full">
            <div className="flex">
                <img src='#' alt="icon flèche" />
                <div>
                    <h2>{props.Source} Jehovanny Mbenga</h2>
                    <h5>16 posts</h5>
                </div>
            </div>
            <div className=" relative space-x-4 space-y-4">
                <div className=''>
                    <img className=" w-full h-80 rounded-3xl" src={Tweet[1].author_avatar} alt="cover" />
                </div>
                <div className=" space-x-4 space-y-2 flex justify-between ">
                    <div className=''>
                        <div className="">
                            <img className=' absolute rounded-full size-8 w-10' src={Tweet[5].image} alt="profil" />
                        </div>
                        <h2>{props.Source} Jehovanny Mbenga</h2>
                        <h5>@Jehovanny_mb</h5>

                    </div>
                    <button className=" rounded-2xl bg-white text-black">
                        Edit profil
                    </button>
                </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum voluptate veritatis officia placeat culpa illum tempora voluptatem. Ratione possimus odit ipsa eos nisi libero molestiae similique adipisci quia quidem!</p>
            <div className=' w-full'>
                {/* <NavLink to={'posts'}> */}
                    <button className=" hover:bg-slate-400 w-1/5 rounded-2xl bg-white text-black">
                      Posts
                    </button>
                {/* </NavLink> */}
                <button className="  hover:bg-slate-400 w-1/5 rounded-2xl bg-white text-black">
                    Replies
                </button>
                <button className="  hover:bg-slate-400 w-1/5 rounded-2xl bg-white text-black">
                    Highlights
                </button>
                <button className="  hover:bg-slate-400 w-1/5 rounded-2xl bg-white text-black">
                    Média
                </button>
                <button className="  hover:bg-slate-400 w-1/5 rounded-2xl bg-white text-black">
                    Likes
                </button>
            </div>
            <Outlet />
        </div>

    )
}