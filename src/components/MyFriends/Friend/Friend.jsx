import React from "react";
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.wrapper} >
            <div className={s.post}>
                <img
                    src={props.src}
                    alt="img-avatar"/>
                    <div></div>
                {props.name}
            </div>
        </div>)

}
export default Friend;