import React from "react";
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0)
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://delo.ua/files/news/images/3624/99/picture2_klichko-pronik-v-_362499_p0.jpg',
                followed: false,
                fullName: 'Vladimir',
                status: 'My first status',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: "https://www.eg.ru/wp-content/uploads/2017/10/33024275219111034.jpg",
                followed: true,
                fullName: 'Masha',
                status: 'I am big girl',
                location: {city: 'Brest', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: "https://i.mycdn.me/image?id=446062445509&plc=WEB&tkn=*TTq7tEeIGm9VtbrOYGab3EvEQ68&fn=sqr_288",
                followed: false,
                fullName: 'Egor',
                status: 'I am boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: "https://b1.filmpro.ru/c/476281.700xp.jpg",
                followed: true,
                fullName: 'Sasha',
                status: 'I like life',
                location: {city: 'Krakov', country: 'Poland'}
            },
            {
                id: 5,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiAlsmHyxiiwORlhZdWmd_KWbli3_V4aCtE5WYVtpLih4cOURq&usqp=CAU",
                followed: false,
                fullName: 'Mary',
                status: 'I like learn English',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ])

    return (<div>
            {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} alt="ava" className={s.userPhoto}/>
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
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)}
        </div>
    )

}

export default Users