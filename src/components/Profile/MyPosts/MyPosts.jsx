import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hello', likesCount: 15},
        {id: 2, message: 'Hi my friends', likesCount: 13},
        {id: 3, message: 'YoYoYo', likesCount: 44},
        {id: 4, message: 'YoYoYo', likesCount: 13},
        {id: 5, message: 'YoYoYo', likesCount: 4},
    ]

    let postsElement = posts
        .map(e => <Post massage={e.message} id={e.id} likesCount={e.likesCount}/>)

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
                {postsElement}
            </div>
        </div>)

}
export default MyPosts;