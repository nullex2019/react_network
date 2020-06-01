import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

/*let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0
        ) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }
    return (
        <div className={s.container}>
            <button className={s.c_button} onClick={getUsers}> Get Users</button>
            {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava" className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Follow</button>
                        : <button onClick={() => {
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

}*/

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        return (

            <div className={s.container}>
                {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava" className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button className={s.c_button} onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Follow</button>
                        : <button className={s.c_button} onClick={() => {
                            this.props.follow(u.id)
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
}

export default Users