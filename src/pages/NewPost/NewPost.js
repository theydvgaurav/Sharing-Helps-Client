import React, { useState } from 'react'
import './NewPost.css'
import axios from 'axios'

const NewPost = () => {

    const [name, setname] = useState(" ");
    const [data, setdata] = useState(" ")


    const AddPostHandler = event => {
        event.preventDefault();
        const post = {
            name: name.toString(),
            data: data.toString(),
        };

        let check = true;

        if(name.length === 0 || data.length === 0 ){
            check = false;
        }

        setname('');
        setdata('');

        if(!check ){
            alert("Title or Body in empty.Please Write Something..")
        }
        else{
            axios.post('https://sharinghelps.herokuapp.com/feed', post)
        }

        

    };




    const NameChange = event => {
        setname(event.target.value);
    }

    const DataChange = event => {
        setdata(event.target.value);
    }



    return (
        <div>
            <div className="container-fluid" style={{marginTop:"10rem"}}>
                <div className="base-container">
                    <div className="h">New Post</div>
                    <br/>
                    <div className="content">
                        <form onSubmit={AddPostHandler}>
                                <div className="h">
                                    <label className="h">Post Title</label>
                                    <br/>
                                    <input type="text"  value={name} onChange={NameChange}  className="h"  placeholder="Write Something.." />
                                </div>
                                <div className="h">
                                    <label>Post Body</label>
                                    <br/>
                                    <textarea type="textarea" value={data} onChange={DataChange} className="h" placeholder="Write Something.." />
                                </div>
                                <br/>
                                <div className="text-center">
                                <button type="submit" className="btn btn-primary ">Submit</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default NewPost