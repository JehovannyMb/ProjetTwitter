// import { useState } from 'react'
import { Body } from './Components/Body'
import ImgProfil from './Components/ImgProfil'
import { BtnTweet } from './Components/BtnTweet'
import Tweet from './tweets-x.json'

function App() {


  // get data from api
  // set it in state

  return (
    <div className=' bg-black'>
      <div className='flex space-x-4  bg-black text-white h-90 p-1 '>

        <div className='flex-col space-y-50 w-full  '>
          <div>
            <nav className='flex row-auto border-b border-r border-l border-gray-600 justify-between '>
              <h2> Home</h2>
              <img src="src/Images/Timeline-Prop.svg" alt="icon" />
            </nav>
            <div className='flex w-full space-x-4 border-b border-r border-l border-gray-600 '>
              <div className=' flex w-10 p-2 '>
                <div className=' w-80'>
                  <ImgProfil />
                </div>
              </div>
              <div className='w-full h-20 space-y-4'>
                <input className=' bg-black mt-1' type="text" placeholder="What's happening" />
                <div className='flex justify-between'>
                  <div className='flex'>
                    <img className='' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Media.svg" alt="icon media" />
                    <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Gif.svg" alt="icon Gif" />
                    <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Poll.svg" alt="icon poll" />
                    <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Emoji.svg" alt="icon emoji" />
                    <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Schedule.svg" alt="icon schelude" />
                  </div>
                  <div className=''>
                    <BtnTweet />
                  </div>

                </div>
              </div>

            </div>
          </div>


          {Tweet.map((tweet) => <Body tweet={tweet} />)}

        </div>
      </div>
    </div>
  )
}


export default App
