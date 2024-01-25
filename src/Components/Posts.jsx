import React from 'react'
import { Body } from './Body'
import Tweet from '../tweets-x.json'


export default function Posts() {
  return (
    <div>
      <Body ImgProfile={Tweet[1].author_avatar} title1={Tweet[1].source} title2={Tweet[1].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[1].text} BodyImg={Tweet[1].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[1].replies} RetweetNbr={Tweet[1].retweets} ReactNbr={Tweet[1].favorites} />
      <Body ImgProfile={Tweet[0].author_avatar} title1={Tweet[0].source} title2={Tweet[0].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[0].text} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[0].replies} RetweetNbr={Tweet[0].retweets} ReactNbr={Tweet[1].favorites} />
      <Body ImgProfile={Tweet[2].author_avatar} title1={Tweet[2].source} title2={Tweet[2].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[2].text} BodyImg={Tweet[2].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[2].replies} RetweetNbr={Tweet[2].retweets} ReactNbr={Tweet[1].favorites} />
      <Body ImgProfile={Tweet[3].author_avatar} title1={Tweet[3].source} title2={Tweet[3].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[3].text} BodyImg={Tweet[3].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[3].replies} RetweetNbr={Tweet[3].retweets} ReactNbr={Tweet[1].favorites} />
      <Body ImgProfile={Tweet[4].author_avatar} title1={Tweet[4].source} title2={Tweet[4].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[4].text} BodyImg={Tweet[4].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[4].replies} RetweetNbr={Tweet[4].retweets} ReactNbr={Tweet[1].favorites} />
      <Body ImgProfile={Tweet[5].author_avatar} title1={Tweet[5].source} title2={Tweet[5].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[5].text} BodyImg={Tweet[5].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[5].replies} RetweetNbr={Tweet[5].retweets} ReactNbr={Tweet[1].favorites} />
      <Body ImgProfile={Tweet[6].author_avatar} title1={Tweet[6].source} title2={Tweet[6].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[6].text} BodyImg={Tweet[6].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[6].replies} RetweetNbr={Tweet[6].retweets} ReactNbr={Tweet[1].favorites} />
      <Body ImgProfile={Tweet[7].author_avatar} title1={Tweet[7].source} title2={Tweet[7].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[7].text} BodyImg={Tweet[7].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[7].replies} RetweetNbr={Tweet[7].retweets} ReactNbr={Tweet[1].favorites} />
      <Body ImgProfile={Tweet[8].author_avatar} title1={Tweet[8].source} title2={Tweet[8].date} VerifiedIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Verified.svg' paragraphe={Tweet[8].text} BodyImg={Tweet[8].image} ReactIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/React.svg' ReplyIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Reply.svg' RetweetIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Retweet.svg' ShareIcon='src/Images/Twitter UI Clone Design (Community) (9)/Icons/Share.svg' ReplyNbr={Tweet[8].replies} RetweetNbr={Tweet[8].retweets} ReactNbr={Tweet[1].favorites} />

    </div>
  )
}