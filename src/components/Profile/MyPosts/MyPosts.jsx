import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hello', likesCount: 15},
        {id: 2, message: 'Hi my friends', likesCount: 13},
        {id: 3, message: 'YoYoYo', likesCount: 44},
        {id: 4, message: 'YoYoYo', likesCount: 13},
        {id: 5, message: 'YoYoYo', likesCount: 4},
    ]

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
            <Post massage={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount}/>
            <Post massage={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCount}/>
            <Post massage={postData[2].message} id={postData[2].id} likesCount={postData[2].likesCount}/>
            <Post massage={postData[3].message} id={postData[3].id} likesCount={postData[3].likesCount}/>
            <Post massage={postData[4].message} id={postData[4].id} likesCount={postData[4].likesCount}/>

            </div>

        </div>)

}
export default MyPosts;