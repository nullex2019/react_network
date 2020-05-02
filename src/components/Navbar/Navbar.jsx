import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import MyFriends from "../MyFriends/MyFriends";


const Navbar = (props) => {

    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='dialogs' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='news' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='settings' activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={`${s.item} ${s.friends}`}>
            <NavLink to='my-friends' activeClassName={s.activeLink}>My Friends</NavLink>
            <MyFriends friends={props.friends}/>


        </div>
    </nav>
}
export default Navbar;