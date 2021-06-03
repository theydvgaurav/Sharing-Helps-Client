import React from 'react';
import './PostLists.css'

const PostList = (props) => {

    return (
        <>
            {props.posts.map((post) => (
                <div className="card cards" style={{marginBottom:"2rem"}}>
                <div className="card-body">
                  <h5 className="card-title"> {post.name}</h5>
                  <p className="card-text">{post.data}</p>
                </div>
                </div>
            ))}
        </>
    );
};

export default PostList