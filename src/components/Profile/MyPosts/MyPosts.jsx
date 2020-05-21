import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";




const MyPosts = (props) => {
    let postsElement = props.posts.map(e => <Post massage={e.message} id={e.id} likesCount={e.likesCount}/>)

    let newPostElement = React.createRef();

    /* Добавляем пост*/
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    /*Изменяем пост*/
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>)

}
export default MyPosts;