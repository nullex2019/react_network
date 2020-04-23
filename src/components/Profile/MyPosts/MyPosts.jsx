import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <div></div>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>)

}
export default MyPosts;