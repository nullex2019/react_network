import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return <div>

        <div className={s.descriptionBlock}>
            <div>Name user: {props.profile.fullName}</div>
            <img src={props.profile.photos.large} />
            <div> {props.profile.aboutMe}</div>
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.instagram}</div>



        </div>


    </div>
}
export default ProfileInfo;