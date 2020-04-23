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
            <Post massage='Hello' likesCount='15'/>
            <Post massage='Hi my friends' likesCount='19'/>
            <Post massage='YoYoYo' likesCount='25'/>


        </div>)

}
export default MyPosts;