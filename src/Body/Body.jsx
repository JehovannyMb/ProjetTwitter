import React from 'react'
import './Body.css'
export default function Body() {
  return (
    <main>
    <section className='SectionContainer1'>
      <div className='SectionContainer2_body'>
<img className='Options' src="src/Images/Twitter.svg" alt="icon du logo" />
<div className='Options'>
  <img src="src/Images/Home.svg" alt=" icon home" />
  <h2>Home</h2>
</div>
<div className='Options'>
  <img src="#" alt=" icon explore" />
  <h2>Explore</h2>
</div>
<div className='Options'>
  <img src="src/Images/3643782_bell_dot_notification_notify_ring_icon.png" alt=" icon notification" />
  <h2>Notification</h2>
</div>
<div className='Options'>
  <img src="src/Images/Messages.svg" alt="icon message" />
  <h2>Message</h2>
</div>
<div className='Options'>
  <img src="src/Images/Bookmarks.svg" alt=" icon bookmarks" />
  <h2>Bookmarks</h2>
</div >
<div className='Options'>
  <img src="src/Images/Lists.svg" alt=" icon lists" />
  <h2>Lists</h2>
</div>
<div className='Options'>
  <img src="src/Images/Profile.svg" alt=" icon profile" />
  <h2>Profile</h2>
</div>
<div className='Options'>
  <img src="src/Images/8201372_more_button_ui_mark_icon.png" alt=" icon more" />
  <h2>More</h2>
</div>
<button>Tweet</button>
      </div>
<div>
  <img src="#" alt="#" />
  <div>
    <h2> Bradley Ortiz</h2>
    <h5>@bradley...</h5>
  </div>
  <img src="#" alt="icon option" />
</div>
    </section>
    <section className='SectionContainer2'>
        <nav className='Nav'>
            <h2 className='title'> Home</h2>
            <img src="#" alt="icon"/>
        </nav>
        <div className='Container1'>
        <div className='ProfilContainer1'>
<img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="image de profil" />

        </div>
        <div className='ProfilContainer2'>
<input type="text" placeholder="What's happening" />
<div className='ProfilContainer2_item'>
<img className='title' src="#" alt="icon" />
            <img className='title' src="#" alt="icon" />
            <img className='title' src="#" alt="icon" />
            <img className='title' src="#" alt="icon" />
            <img className='title' src="#" alt="icon" />
<button> Tweet</button>
      
</div>
              </div>
          
        </div>
        
  

    </section>
    
    <section className='SectionContainer3'>
      <div className='SectionContainer3_body'>
        <div className='Options'>
        <button>
          <img src="#" alt="icon search" />
        </button>
<input type="text" placeholder='Search Twitter' />

        </div>
        <div>
          <div className='Options'>
            <h2>Trends for you</h2>
            <img src="src/Images/3844444_dot_menu_more_option_icon.png" alt="icon setting" />
          </div>
          <div className='Options'>
            <span>
            <h5>Trending in Turkey</h5>
            <h2>#SQUID</h2>
            <h5>2,066 Tweets</h5>
            </span>
           <img src="src/Images/3844444_dot_menu_more_option_icon.png" alt="icon option" />
          </div>
          <div className='Options'>
            <span>
            <h5>Trending in Turkey</h5>
            <h2>#SQUID</h2>
            <h5>2,066 Tweets</h5>
            </span>
           <img src="src/Images/3844444_dot_menu_more_option_icon.png" alt="icon option" />
          </div>
          <div className='Options'>
            <span>
            <h5>Trending in Turkey</h5>
            <h2>#SQUID</h2>
            <h5>2,066 Tweets</h5>
            </span>
           <img src="src/Images/3844444_dot_menu_more_option_icon.png" alt="icon option" />
          </div>
          <div className='Options'>
            <span>
            <h5>Trending in Turkey</h5>
            <h2>#SQUID</h2>
            <h5>2,066 Tweets</h5>
            </span>
           <img src="src/Images/3844444_dot_menu_more_option_icon.png" alt="icon option" />
          </div>
          <h2>Show more</h2>
        </div>
          <div>
            <h2>Who to follow</h2>
            <div className='Options'>
              <img src="#" alt="#" />
              <div>
                <h4>The New York Times</h4>
                <h5>@nytimes</h5>
              </div>
              <button>Follow</button>
            </div>
            <div className='Options'>
              <img src="#" alt="#" />
              <div>
                <h4>CNN</h4>
                <h5>@CNN</h5>
              </div>
              <button>Follow</button>
            </div>
            <div className='Options'>
              <img src="#" alt="#" />
              <div>
                <h4>Twitter</h4>
                <h5>@Twitter</h5>
              </div>
              <button>Follow</button>
            </div>
            <h2>Show more</h2>
          </div>
          <div>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Imprint</a>
            <a href="#">Ads info</a>
            <a href="#">More...</a>
            <a href="#">c 2021 Twitter, inc</a>
          </div>
      </div>
    </section>
    </main>
  )
}
