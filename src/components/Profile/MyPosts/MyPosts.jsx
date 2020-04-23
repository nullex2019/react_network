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
            <Post massage='Hello' likecounts='15'/>
            <Post massage='Hi my friends' likecounts='19'/>
            <Post massage='YoYoYo' likecounts='25'/>


        </div>)

}
export default MyPosts;