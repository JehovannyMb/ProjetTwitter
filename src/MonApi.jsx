import axios from 'axios';
import { useEffect, useState } from 'react'


import React from 'react'

export default function MonApi() {
  const [postRoute, setPostRoute] = useState('')
  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/posts`)
      .then(res => {
        const affichePosts = res.data
        setPostRoute( affichePosts )
        console.log(affichePosts);
      })

  })
  return (
    <div>{postRoute}</div>
  )
}



