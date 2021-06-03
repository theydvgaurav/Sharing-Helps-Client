import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Posts.css'
import PostList from './PostLists'
const Posts = () => {

  const [Data, setData] = useState([]);

    const getPosts = () =>{
        axios.get('https://sharinghelps.herokuapp.com/app/feed')
        // .then(response => await response.data.json)
        .then(response => setData(response.data))
    }
c
    useEffect(()=>{
        getPosts();
    }, [])


  return (
    <div className="container-fluid">
      <div className="text-center">
    <div style={{width : "auto", margin: "0 auto" }}>
    <PostList posts={Data} />
  
    </div>
</div>
</div>
  )
}
export default Posts;
