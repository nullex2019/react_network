import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                            props.toogleFollowingProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials:true,//для получения данных с сервака
                                headers: {
                                    "API-KEY": "225c838c-fc40-4ad6-a1f3-3843b2819080"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode===0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toogleFollowingProgress(false, u.id)
                                })

                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id=>id===u.id)} className={s.c_button} onClick={() => {
                            props.toogleFollowingProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                withCredentials:true,
                                headers: {
                                    "API-KEY": "225c838c-fc40-4ad6-a1f3-3843b2819080"
                                }
                            })
                                .then(response => {
                                   if (response.data.resultCode===0) {
                                       props.follow(u.id)
                                   }
                                    props.toogleFollowingProgress(false, u.id)
                                })



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