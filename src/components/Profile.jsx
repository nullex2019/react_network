import React from 'react';
import classes from './Profile.module.css'

const Profile =() => {
    return <div className= {classes.content}>
        <div>
            <img
                src="https://www.wur.nl/upload_mm/f/3/0/63b287aa-f976-4a3d-baed-c2035f14dd8f_Irene_tinto-river.jpg"
                alt=""/>
        </div>
        <div>
            avatar+description
        </div>

        <div className={classes.posts}>
            my post
            <div className={classes.post}>
                new post
            </div>
        </div>

        <div>
            post1
        </div>
        <div>
            post2
        </div>


    </div>
}
export default Profile;