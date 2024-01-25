import { useState } from "react"
export function Body(props) {
  let [ReactNbr, setReactNbr]=useState(0)
  const Ajouter = ()=>{
    setReactNbr(ReactNbr+1)
  }

  return (
    <div className='flex space-x-2 border-b border-r border-l border-gray-600 p-2'>
      <div className='flex  w-10 '>
        <img className=" rounded-full w-20 h-8" src={props.ImgProfile} alt="img profile" />
      </div>
      <div className="flex-col h-full space-y-2 w-full ">
        <div className="flex " >
          <h3>{props.title1}</h3>
          <img src={props.VerifiedIcon} alt="verified icon" />

          <p>
            {props.title2}
          </p>
        </div>
        <p>
          {props.paragraphe}
        </p>
        <img className="  w-full h-80 rounded-3xl " src={props.BodyImg} alt="body img" />

        <div className="flex h-8 w-full ">
          <div className='flex w-1/4 hover:bg-slate-700 rounded-full'>
            <img src={props.ReplyIcon} alt="like icon" />
            <p>
              {props.ReplyNbr}
            </p>
          </div>
          <div className='flex w-1/4 hover:bg-blue-950 rounded-full'>
            <img src={props.RetweetIcon} alt="retweet icon" />

            <p>
              {props.RetweetNbr}
            </p>
          </div>
          <div onClick={Ajouter} className='flex w-1/4  hover:bg-red-500 rounded-full'>
            <img className=" bg-red-500 rounded-full" src={props.ReactIcon} alt="reply icon" />

            <p>
              {props.ReactNbr}
            </p>
          </div>
          <div className='flex w-1/4 hover:bg-blue-950 rounded-full '>
            <img src={props.ShareIcon} alt="share icon" />

            <p>
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

























// import React from 'react'
// import ImgProfil from './ImgProfil'
// export default function Section2() {
//   return (
    // <div className='flex row-auto w-full items-center h-8 '>
      // <div className='items-center h-2'>
        // <nav className='flex row-auto justify-between border-white'>
        //   <h2> Home</h2>
        //   <img src="src/Images/Timeline-Prop.svg" alt="icon" />
        // </nav>
        // <div className='flex w-full h-2 container1'>
        //   <div className='ProfilContainer1'>
        //     <ImgProfil />
        //   </div>
        //   <div className='ProfilContainer2'>
        //     <input type="text" placeholder="What's happening" />
        //     <div className='flex'>
        //       <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Media.svg" alt="icon media" />
        //       <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Gif.svg" alt="icon Gif" />
        //       <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Poll.svg" alt="icon poll" />
        //       <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Emoji.svg" alt="icon emoji" />
        //       <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Schedule.svg" alt="icon schelude" />

        //       <button> Tweet</button>

        //     </div>
        //   </div>

        // </div>
// <div className='Container2'>
//   <div className='ProfilContainer1'>
//     <ImgProfil />

//   </div>
//   <div className="flex">
//     <div className="ProfilContainer2_item" >
//       <h3>CNN</h3>
//       <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

//       <p>
//         @CNN.7m
//       </p>
//     </div>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio totam velit temporibus, repellendus aperiam voluptas odit obcaecati expedita nisi blanditiis recusandae omnis voluptatibus veritatis esse corporis! Reiciendis, doloremque reprehenderit.
//     </p>
//     <div className='ProfilContainer2_itemOptions'>
//       <div className='interactions'>
//         <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

//         <p>
//           57
//         </p>
//       </div>
//       <div className='interactions'>
//         <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

//         <p>
//           144
//         </p>
//       </div>
//       <div className='interactions'>
//         <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

//         <p>
//           184
//         </p>
//       </div>
//       <div className='interactions'>
//         <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

//         <p>
//         </p>
//       </div>

//     </div>

//   </div>
// </div>
//         <div className='Container2'>
//           <div className='ProfilContainer1'>
//             <ImgProfil />

//           </div>
//           <div className="ProfilContainer2">
//             <div className="flex" >
//               <h3>The New York Times</h3>
//               <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

//               <p>
//                 @nytimes . 2h
//               </p>
//             </div>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio totam velit temporibus, repellendus aperiam voluptas odit obcaecati expedita nisi blanditiis recusandae omnis voluptatibus veritatis esse corporis! Reiciendis, doloremque reprehenderit.
//             </p>
//             <img className='ImgBody' src="src/Images/Twitter UI Clone Design (Community) (10)/Tweet/Body/Img.jpg" alt="ImgBody" />
//             <div className='ProfilContainer2_itemOptions'>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

//                 <p>
//                   19
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

//                 <p>
//                   48
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

//                 <p>
//                   482
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

//                 <p>
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>
//         <div className='Container2'>
//           <div className='ProfilContainer1'>
//             <ImgProfil />

//           </div>
//           <div className="ProfilContainer2">
//             <div className="ProfilContainer2_item" >
//               <h3>Twitter</h3>
//               <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

//               <p>
//                 @Twitter . Oct 29
//               </p>
//             </div>
//             <p>
//               BIG NEWS lol jk still Twitter
//             </p>
//             <div className='ProfilContainer2_itemOptions'>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

//                 <p>
//                   6.8K
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

//                 <p>
//                   36.6K
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

//                 <p>
//                   267.1K
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

//                 <p>
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>
//         <div className='Container2'>
//           <div className='ProfilContainer1'>
//             <ImgProfil />

//           </div>
//           <div className="ProfilContainer2">
//             <div className="ProfilContainer2_item" >
//               <h3>Twitter</h3>
//               <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

//               <p>
//                 @Twitter . Oct 24
//               </p>
//             </div>
//             <p>
//               hello literally everyone
//             </p>
//             <div className='ProfilContainer2_itemOptions'>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

//                 <p>
//                   118.7K
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

//                 <p>
//                   785.4K
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

//                 <p>
//                   3.3M
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

//                 <p>
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>
//         <div className='Container2'>
//           <div className='ProfilContainer1'>
//             <ImgProfil />

//           </div>
//           <div className="ProfilContainer2">
//             <div className="ProfilContainer2_item" >
//               <h3>Twitter</h3>
//               <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

//               <p>
//                 @Twitter . Oct 24
//               </p>
//             </div>
//             <p>
//               hello literally everyone
//             </p>
//             <img className='ImgBody' src="src/Images/Twitter UI Clone Design (Community) (10)/Tweet/Body/Img.jpg" alt="ImgBody" />

//             <div className='ProfilContainer2_itemOptions'>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

//                 <p>
//                   118.7K
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

//                 <p>
//                   785.4K
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

//                 <p>
//                   3.3M
//                 </p>
//               </div>
//               <div className='interactions'>
//                 <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

//                 <p>
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>
//       </div>



//     </div>
//   )
// }
