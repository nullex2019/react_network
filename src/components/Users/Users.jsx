import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

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
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt="ava" className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button className={s.c_button} onClick={() => {
                            props.unfollow(u.id)
                        }}>Follow</button>
                        : <button className={s.c_button} onClick={() => {
                            props.follow(u.id)
                        }}>Unfollow</button>}
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