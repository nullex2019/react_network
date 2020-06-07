import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);//округляем
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.container}>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && s.selectedPage}
                        onClick={(event) => {
                            props.onPageChanged(p)
                        }}>
                            {p}
                        </span>
                })}
            </div>

            {props.users.map(u => <div key={u.id}>
            <span>
                <div>

                   <NavLink to={'/profile/'+ u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                  alt="ava" className={s.userPhoto}/>
                   </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id=>id===u.id)} className={s.c_button} onClick={() => {
                            props.unfollowThunkCreator(u.id)

                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id=>id===u.id)} className={s.c_button} onClick={() => {
                            props.followThunkCreator(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.id}</div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>)}
        </div>
    )
}

export default Users