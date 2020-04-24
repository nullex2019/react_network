import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
            <Post massage='Hello' likesCount='15'/>
            <Post massage='Hi my friends' likesCount='19'/>
            <Post massage='YoYoYo' likesCount='25'/>
            </div>

        </div>)

}
export default MyPosts;