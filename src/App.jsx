import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nav } from './Components/Nav'
import { Body } from './Components/Body'
import { Menu } from './Components/Menu'
import ImgProfil from './Components/ImgProfil'
import { HowToFollow } from './Components/HowToFollow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex space-x-4  bg-black text-white h-full w-full p-8  '>
      <div className=' w-1/4'>

        <Nav icon='src/Images/Twitter UI Clone Design (Community) (5)/Icons/Twitter.svg' />
        <Nav icon='src/Images/Home.svg' title='Home' />
        <Nav icon='src/Images/Twitter UI Clone Design (Community) (5)/Icons/Explore/Fill.svg' title='Explore' />
        <Nav icon='src/Images/Notifications.svg' title='Notification' />
        <Nav icon='src/Images/Twitter UI Clone Design (Community) (5)/Icons/Messages.svg' title='Message' />
        <Nav icon='src/Images/Bookmarks.svg' title='Bookmarks' />
        <Nav icon='src/Images/Lists.svg' title='List' />
        <Nav icon='src/Images/Profile.svg' title='Profile' />
        <Nav icon='src/Images/More.svg' title='More' />
      </div>

      <div className='flex-col space-y-50 w-2/4 snap-y '>
        <nav className='flex row-auto border-b border-r border-l border-gray-600 justify-between '>
          <h2> Home</h2>
          <img src="src/Images/Timeline-Prop.svg" alt="icon" />
        </nav>
        <div className='flex w-full border-b border-r border-l border-gray-600 '>
          <div className='ProfilContainer1'>
            <ImgProfil />
          </div>
          <div className='ProfilContainer2'>
            <input type="text" placeholder="What's happening" />
            <div className='flex'>
              <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Media.svg" alt="icon media" />
              <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Gif.svg" alt="icon Gif" />
              <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Poll.svg" alt="icon poll" />
              <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Emoji.svg" alt="icon emoji" />
              <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Schedule.svg" alt="icon schelude" />

              <button> Tweet</button>

            </div>
          </div>

        </div>
        <Body ImgProfile='src/Images/profile-pic.png' title1='CNN' title2='@CNN.7m' VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio totam velit temporibus, repellendus aperiam voluptas odit obcaecati expedita nisi blanditiis recusandae omnis voluptatibus veritatis esse corporis! Reiciendis, doloremque reprehenderit.' BodyImg='src/Images/Twitter UI Clone Design (Community) (10)/Tweet/Body/Img.jpg' ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr='57' RetweetNbr='144' ReactNbr='184' />
        <Body ImgProfile='src/Images/profile-pic.png' title1='The New York Times' title2='@nytimes . 2h' VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio totam velit temporibus, repellendus aperiam voluptas odit obcaecati expedita nisi blanditiis recusandae omnis voluptatibus veritatis esse corporis! Reiciendis, doloremque reprehenderit.' BodyImg='src/Images/Twitter UI Clone Design (Community) (10)/Tweet/Body/Img.jpg' ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr='57' RetweetNbr='144' ReactNbr='184' />
        <Body ImgProfile='src/Images/profile-pic.png' title1='CNN' title2='@CNN.7m' VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio totam velit temporibus, repellendus aperiam voluptas odit obcaecati expedita nisi blanditiis recusandae omnis voluptatibus veritatis esse corporis! Reiciendis, doloremque reprehenderit.' BodyImg='src/Images/Twitter UI Clone Design (Community) (10)/Tweet/Body/Img.jpg' ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr='57' RetweetNbr='144' ReactNbr='184' />

      </div>


      <div className='w-1/4  space-y-2 p-8'>
        <div className=' '>
          <div className="flex space-x-2 bg-slate-500 rounded-xl">
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
        <div className=' rounded-2xl p-2 space-x-2 space-y-2 bg-slate-500'>
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
  )
}

export default App
