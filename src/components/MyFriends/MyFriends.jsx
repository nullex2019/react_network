import React from "react";
import s from './MyFriends.module.css';
import Friend from "./Friend/Friend";

const MyFriends = (props) => {
    let friend = props.friends.map(e => <Friend name={e.name} id={e.id} src={e.src}/>)
    return (
        <div className={s.friend}>
            {friend}
        </div>)
}
export default MyFriends;