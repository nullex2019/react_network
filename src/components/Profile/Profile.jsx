import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile =() => {
    return <div>
        <div>
            <img
                src="https://www.wur.nl/upload_mm/f/3/0/63b287aa-f976-4a3d-baed-c2035f14dd8f_Irene_tinto-river.jpg"
                alt=""/>
        </div>
        <div>
            ava + descr
        </div>
        <MyPosts/>


    </div>
}
export default Profile;