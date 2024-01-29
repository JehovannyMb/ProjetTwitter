// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
          {/* map on state to show tweets */}
          {/* <Body ImgProfile={Tweet.map(ressourse => {
            ressourse.author_avatar
          })} title1={Tweet[1].source} title2={Tweet[1].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[1].text} BodyImg={Tweet[1].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[1].replies} RetweetNbr={Tweet[1].retweets} ReactNbr={Tweet[1].favorites} /> */}

          <Body ImgProfile={Tweet[1].author_avatar} title1={Tweet[1].source} title2={Tweet[1].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[1].text} BodyImg={Tweet[1].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[1].replies} RetweetNbr={Tweet[1].retweets} ReactNbr={Tweet[1].favorites} />
          <Body ImgProfile={Tweet[0].author_avatar} title1={Tweet[0].source} title2={Tweet[0].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[0].text} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[0].replies} RetweetNbr={Tweet[0].retweets} ReactNbr={Tweet[1].favorites} />
          <Body ImgProfile={Tweet[2].author_avatar} title1={Tweet[2].source} title2={Tweet[2].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[2].text} BodyImg={Tweet[2].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[2].replies} RetweetNbr={Tweet[2].retweets} ReactNbr={Tweet[1].favorites} />
          <Body ImgProfile={Tweet[3].author_avatar} title1={Tweet[3].source} title2={Tweet[3].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[3].text} BodyImg={Tweet[3].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[3].replies} RetweetNbr={Tweet[3].retweets} ReactNbr={Tweet[1].favorites} />
          <Body ImgProfile={Tweet[4].author_avatar} title1={Tweet[4].source} title2={Tweet[4].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[4].text} BodyImg={Tweet[4].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[4].replies} RetweetNbr={Tweet[4].retweets} ReactNbr={Tweet[1].favorites} />
          <Body ImgProfile={Tweet[5].author_avatar} title1={Tweet[5].source} title2={Tweet[5].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[5].text} BodyImg={Tweet[5].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[5].replies} RetweetNbr={Tweet[5].retweets} ReactNbr={Tweet[1].favorites} />
          <Body ImgProfile={Tweet[6].author_avatar} title1={Tweet[6].source} title2={Tweet[6].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[6].text} BodyImg={Tweet[6].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[6].replies} RetweetNbr={Tweet[6].retweets} ReactNbr={Tweet[1].favorites} />
          <Body ImgProfile={Tweet[7].author_avatar} title1={Tweet[7].source} title2={Tweet[7].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[7].text} BodyImg={Tweet[7].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[7].replies} RetweetNbr={Tweet[7].retweets} ReactNbr={Tweet[1].favorites} />
          <Body ImgProfile={Tweet[8].author_avatar} title1={Tweet[8].source} title2={Tweet[8].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[8].text} BodyImg={Tweet[8].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[8].replies} RetweetNbr={Tweet[8].retweets} ReactNbr={Tweet[1].favorites} />
          <Body ImgProfile={Tweet[9].author_avatar} title1={Tweet[9].source} title2={Tweet[9].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[9].text} BodyImg={Tweet[9].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[9].replies} RetweetNbr={Tweet[9].retweets} ReactNbr={Tweet[1].favorites} />

          <Body ImgProfile='src/Images/profile-pic.png' title1='The New York Times' title2='@nytimes . 2h' VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio totam velit temporibus, repellendus aperiam voluptas odit obcaecati expedita nisi blanditiis recusandae omnis voluptatibus veritatis esse corporis! Reiciendis, doloremque reprehenderit.' BodyImg='src/Images/Twitter UI Clone Design (Community) (10)/Tweet/Body/Img.jpg' ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr=' 19' RetweetNbr='48' ReactNbr='482' />
          <Body ImgProfile='src/Images/profile-pic.png' title1='CNN' title2='@CNN.7m' VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe='BIG NEWS lol jk still Twitter' BodyImg='' ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr='6.8K' RetweetNbr='36.6K' ReactNbr='267.1K' />
          <Body ImgProfile='src/Images/profile-pic.png' title1='CNN' title2='@CNN.7m' VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe='hello literally everyone' BodyImg='' ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr='118.7K' RetweetNbr='785.4K' ReactNbr='3.3M' />
          <Body ImgProfile='src/Images/profile-pic.png' title1='CNN' title2='@CNN.7m' VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe='hello literally everyone' BodyImg='' ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr='118.7K' RetweetNbr='785.4K' ReactNbr='3.3M' />

        </div>




      </div>


    </div>
  )
}


export default App
