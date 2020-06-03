import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';
/*import Pagination from '@material-ui/lab/Pagination';*/
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

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            })
    }
//обработчик при нажатии (метод)
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);//округляем
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }




        return (<div className={s.container}>
                <div>
                    {pages.map(p => {return <span
                        className={this.props.currentPage === p && s.selectedPage}
                        onClick={(event) => {this.onPageChanged(p)}}>
                            {p}
                        </span>
                    })}
                </div>


               {/* <Pagination count={pagesCount} shape="rounded" onClick={() => {this.onPageChanged()}} />*/}



                {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt="ava" className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button className={s.c_button} onClick={() => {
                            this.props.unfollow(u.id)}}>Follow</button>
                        : <button className={s.c_button} onClick={() => {
                            this.props.follow(u.id)}}>Unfollow</button>}
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