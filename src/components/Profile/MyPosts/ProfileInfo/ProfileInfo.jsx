import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://www.wur.nl/upload_mm/f/3/0/63b287aa-f976-4a3d-baed-c2035f14dd8f_Irene_tinto-river.jpg"
                 alt=""/>
        </div>
        <div className={s.descriptionBlock}>
            ava + descr
        </div>


    </div>
}
export default ProfileInfo;