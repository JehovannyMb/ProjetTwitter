export function HowToFollow(props) {
    return (
        <div className="flex space-x-2">
                     <img className='rouded-full size-8' src={props.FollowProfile} alt="image de profil" />


              <div>
                <h4>{props.FollowTitle1}</h4>
                <h5>{props.FollowTitle2}</h5>
              </div>
              <button className=' rounded-xl  bg-slate-300 text-black size-12 content-between'>Follow</button>
            </div>
    )
}