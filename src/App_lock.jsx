import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nav } from './Components/Nav'
import { Menu } from './Components/Menu'
import ImgProfil from './Components/ImgProfil'
import { HowToFollow } from './Components/HowToFollow'
import { BtnTweet } from './Components/BtnTweet'
import { NavLink, Outlet } from "react-router-dom"


function App() {
  let [ReactNbr, setReactNbr] = useState(0)


  return (
    <div className=''>
      <div className='flex space-x-4  bg-black text-white h-90 p-1 '>
        <div className=' w-1/4'>
          <div className=' fixed content-center pb-10 pl-10'>

            <Nav icon='src/Images/Twitter.svg' />
            <NavLink to={'/Home'}>
              <Nav icon='src/Images/Home.svg' title='Home' />
            </NavLink>
            <Nav icon='src/Images/Twitter UI Clone Design (Community) (5)/Icons/Explore/Fill.svg' title='Explore' />
            <Nav icon='src/Images/Notifications.svg' title='Notification' />
            <Nav icon='src/Images/Twitter UI Clone Design (Community) (5)/Icons/Messages.svg' title='Message' />
            <Nav icon='src/Images/Bookmarks.svg' title='Bookmarks' />
            <Nav icon='src/Images/Lists.svg' title='List' />
            <nav>
              <NavLink to={'/Profil'}>
                <Nav icon='src/Images/Profile.svg' title='Profile' />
              </NavLink>
            </nav>
            <Nav icon='src/Images/More.svg' title='More' />
            <div className=' h-12 text-center '>
              <BtnTweet />

            </div>
            <div className='flex mt-32 w-full p-2'>
              <ImgProfil />

              <div className='w-3/4'>
                <h3> Bradley Ortiz</h3>
                <h5>@bradley...</h5>
              </div>
              <img src="src/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg" alt="icon option" />
            </div>
          </div>
        </div>

        <div className='flex-col space-y-50 w-2/4  '>
          <div><Outlet /></div>
        </div>


        <div className='w-1/4 space-y-2'>
          <div className=' fixed space-y-2 pr-12'>
            <div className=' '>
              <div className="flex space-x-4 bg-slate-500 rounded-xl">
                <button className='SearchIcon' >
                  <img src="src/Images/Search.svg" alt="icon search" />
                </button>
                <input className='rounded-xl  bg-slate-500' type="text" placeholder='Search Twitter' />

              </div>

            </div>
            <div className=' rounded-2xl p-2 space-x-2 space-y-2 bg-slate-500'>
              <div className='flex space-x-2'>
                <h3>Trends for you</h3>
                <img src="src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg" alt="icon setting" />
              </div>
              <Menu MenuTitle1='Trending in Turkey' MenuTitle2='#SQUID' TweetNbr='2,066 Tweets' MoreIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg' />
              <Menu MenuTitle1='Trending in Turkey' MenuTitle2='#SQUID' TweetNbr='2,066 Tweets' MoreIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg' />
              <Menu MenuTitle1='Trending in Turkey' MenuTitle2='#SQUID' TweetNbr='2,066 Tweets' MoreIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg' />
              <Menu MenuTitle1='Trending in Turkey' MenuTitle2='#SQUID' TweetNbr='2,066 Tweets' MoreIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg' />
              <h3 className=''>Show more</h3>
            </div>
            <div className=' rounded-2xl w-90 p-2 space-x-2 space-y-2 bg-slate-500 justify-between '>
              <HowToFollow FollowProfile='src/Images/profile-pic.png' FollowTitle1='The New York Times' FollowTitle2='@nytimes' />
              <HowToFollow FollowProfile='src/Images/profile-pic.png' FollowTitle1='CNN' FollowTitle2='@CNN' />
              <HowToFollow FollowProfile='src/Images/profile-pic.png' FollowTitle1='Twitter' FollowTitle2='@Twitter' />

            </div>
            <div className=' text-gray-500'>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Imprint</a>
              <a href="#">Ads info</a>
              <a href="#">More...</a>
              <a href="#">c 2021 Twitter, inc</a>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}


export default App
