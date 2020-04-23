import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={s.post}>
                <img
                    src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png"
                    alt=""/>
                post1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>)

}
export default Post;