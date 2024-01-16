import React from 'react'
import './Body.css'
export default function Body() {
  return (
    <main>
      <section className='SectionContainer1'>
        <div className='SectionContainer2_body'>
          <img className='Options' src="src/Images/Twitter.svg" alt="icon du logo" />
          <div className='OptionsSection1'>
            <img className='IconsSection1' src="src/Images/Home.svg" alt=" icon home" />
            <h3>Home</h3>
          </div>
          <div className='OptionsSection1'>
            <img className='IconsSection1' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Explore/Fill.svg" alt=" icon explore" />
            <h3>Explore</h3>
          </div>
          <div className='OptionsSection1'>
            <img className='IconsSection1' src="src/Images/Notifications.svg" alt=" icon notification" />
            <h3>Notification</h3>
          </div>
          <div className='OptionsSection1'>
            <img className='IconsSection1' src="src/Images/Messages.svg" alt="icon message" />
            <h3>Message</h3>
          </div>
          <div className='OptionsSection1'>
            <img className='IconsSection1' src="src/Images/Bookmarks.svg" alt=" icon bookmarks" />
            <h3>Bookmarks</h3>
          </div >
          <div className='OptionsSection1'>
            <img className='IconsSection1' src="src/Images/Lists.svg" alt=" icon lists" />
            <h3>Lists</h3>
          </div>
          <div className='OptionsSection1'>
            <img className='IconsSection1' src="src/Images/Profile.svg" alt=" icon profile" />
            <h3>Profile</h3>
          </div>
          <div className='IconsSection1_More'>
            <img className='IconsSection1' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/More.svg" alt=" icon more" />
            <h3>More</h3>
          </div>
          <button className='IconsSection1_btn' >Tweet</button>
        </div>
        <div className='IconsSections'>
          <img className='IconsSection1_imgProfil' src="src/Images/profile-pic.png" alt="#" />
          <div>
            <h3> Bradley Ortiz</h3>
            <h5>@bradley...</h5>
          </div>
          <img src="src/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg" alt="icon option" />
        </div>
      </section>
      <section >
        <div className='SectionContainer2'>
          <nav className='Nav'>
            <h2 className='title'> Home</h2>
            <img src="src/Images/Timeline-Prop.svg" alt="icon" />
          </nav>
          <div className='Container1'>
            <div className='ProfilContainer1'>
              <img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="image de profil" />

            </div>
            <div className='ProfilContainer2'>
              <input type="text" placeholder="What's happening" />
              <div className='ProfilContainer2_ItemsBtn'>
                <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Media.svg" alt="icon media" />
                <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Gif.svg" alt="icon Gif" />
                <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Poll.svg" alt="icon poll" />
                <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Emoji.svg" alt="icon emoji" />
                <img className='title' src="src/Images/Twitter UI Clone Design (Community) (5)/Icons/Schedule.svg" alt="icon schelude" />

                <button> Tweet</button>

              </div>
            </div>

          </div>
          <div className='Container2'>
            <div className='ProfilContainer1'>
              <img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="image de profil" />

            </div>
            <div className="ProfilContainer2">
              <div className="ProfilContainer2_item" >
                <h3>CNN</h3>
                <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

                <p>
                  @CNN.7m
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio totam velit temporibus, repellendus aperiam voluptas odit obcaecati expedita nisi blanditiis recusandae omnis voluptatibus veritatis esse corporis! Reiciendis, doloremque reprehenderit.
              </p>
              <div className='ProfilContainer2_itemOptions'>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

                  <p>
                    57
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

                  <p>
                    144
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

                  <p>
                    184
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

                  <p>
                  </p>
                </div>

              </div>

            </div>
          </div>
          <div className='Container2'>
            <div className='ProfilContainer1'>
              <img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="image de profil" />

            </div>
            <div className="ProfilContainer2">
              <div className="ProfilContainer2_item" >
                <h3>The New York Times</h3>
                <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

                <p>
                  @nytimes . 2h
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio totam velit temporibus, repellendus aperiam voluptas odit obcaecati expedita nisi blanditiis recusandae omnis voluptatibus veritatis esse corporis! Reiciendis, doloremque reprehenderit.
              </p>
              <img className='ImgBody' src="src/Images/Twitter UI Clone Design (Community) (10)/Tweet/Body/Img.jpg" alt="ImgBody" />
              <div className='ProfilContainer2_itemOptions'>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

                  <p>
                    19
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

                  <p>
                    48
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

                  <p>
                    482
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

                  <p>
                  </p>
                </div>

              </div>

            </div>
          </div>
          <div className='Container2'>
            <div className='ProfilContainer1'>
              <img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="image de profil" />

            </div>
            <div className="ProfilContainer2">
              <div className="ProfilContainer2_item" >
                <h3>Twitter</h3>
                <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

                <p>
                  @Twitter . Oct 29
                </p>
              </div>
              <p>
                BIG NEWS lol jk still Twitter
              </p>
              <div className='ProfilContainer2_itemOptions'>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

                  <p>
                    6.8K
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

                  <p>
                    36.6K
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

                  <p>
                    267.1K
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

                  <p>
                  </p>
                </div>

              </div>

            </div>
          </div>
          <div className='Container2'>
            <div className='ProfilContainer1'>
              <img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="image de profil" />

            </div>
            <div className="ProfilContainer2">
              <div className="ProfilContainer2_item" >
                <h3>Twitter</h3>
                <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

                <p>
                  @Twitter . Oct 24
                </p>
              </div>
              <p>
                hello literally everyone
              </p>
              <div className='ProfilContainer2_itemOptions'>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

                  <p>
                    118.7K
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

                  <p>
                    785.4K
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

                  <p>
                    3.3M
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

                  <p>
                  </p>
                </div>

              </div>

            </div>
          </div>
          <div className='Container2'>
            <div className='ProfilContainer1'>
              <img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="image de profil" />

            </div>
            <div className="ProfilContainer2">
              <div className="ProfilContainer2_item" >
                <h3>Twitter</h3>
                <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg" alt="" />

                <p>
                  @Twitter . Oct 24
                </p>
              </div>
              <p>
                hello literally everyone
              </p>
              <img className='ImgBody' src="src/Images/Twitter UI Clone Design (Community) (10)/Tweet/Body/Img.jpg" alt="ImgBody" />

              <div className='ProfilContainer2_itemOptions'>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg" alt="" />

                  <p>
                    118.7K
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg" alt="" />

                  <p>
                    785.4K
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/React.svg" alt="" />

                  <p>
                    3.3M
                  </p>
                </div>
                <div className='interactions'>
                  <img src="src/Twitter UI Clone Design (Community) (9)/Icons/Share.svg" alt="" />

                  <p>
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>

      <section className='SectionContainer3'>
        <div className='SectionContainer3_body'>
          <div className='OptionsSection3_Containers'>
            <div className="InputBtn">
            <button className='SearchIcon' >
              <img src="src/Images/Search.svg" alt="icon search" />
            </button>
            <input className='SearchInput' type="text" placeholder='Search Twitter' />

            </div>
            
          </div>
          <div className='OptionsSection3_Containers'>
            <div className='Options'>
              <h3>Trends for you</h3>
              <img src="src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg" alt="icon setting" />
            </div>
            <div className='Options'>
              <span>
                <h5>Trending in Turkey</h5>
                <h3>#SQUID</h3>
                <h5>2,066 Tweets</h5>
              </span>
              <img src="src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg" alt="icon option" />
            </div>
            <div className='Options'>
              <span>
                <h5>Trending in Turkey</h5>
                <h3>#SQUID</h3>
                <h5>2,066 Tweets</h5>
              </span>
              <img src="src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg" alt="icon option" />
            </div>
            <div className='Options'>
              <span>
                <h5>Trending in Turkey</h5>
                <h3>#SQUID</h3>
                <h5>2,066 Tweets</h5>
              </span>
              <img src="src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg" alt="icon option" />
            </div>
            <div className='Options'>
              <span>
                <h5>Trending in Turkey</h5>
                <h3>#SQUID</h3>
                <h5>2,066 Tweets</h5>
              </span>
              <img src="src/Images/Twitter UI Clone Design (Community) (9)/Icons/More-2.svg" alt="icon option" />
            </div>
            <h3>Show more</h3>
          </div>
          <div className='OptionsSection3_Containers'>
            <h3>Who to follow</h3>
            <div className='IconsSections'>
              <img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="#" />
              <div>
                <h4>The New York Times</h4>
                <h5>@nytimes</h5>
              </div>
              <button className='FollowBtn'>Follow</button>
            </div>
            <div className='IconsSections'>
              <img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="#" />
              <div>
                <h4>CNN</h4>
                <h5>@CNN</h5>
              </div>
              <button className='FollowBtn'>Follow</button>
            </div>
            <div className='IconsSections'>
              <img className='ProfilContainer_img' src="src/Images/profile-pic.png" alt="#" />
              <div>
                <h4>Twitter</h4>
                <h5>@Twitter</h5>
              </div>
              <button className='FollowBtn'>Follow</button>
            </div>
            <h3>Show more</h3>
          </div>
          <div className='mores'>
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
