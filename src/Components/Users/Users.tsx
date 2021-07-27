import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css';
import axios from "axios";

export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
    }


    return (
        <div>
            {
                props.usersPage.users.map(user => <div>
                    <span>
                        <div>
                        <img className={s.photo}
                             src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_E6mVH-jjV4_zGfvAaLKnju8nvJ0OV87lpA&usqp=CAU'}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unfollow(user.id)}>followed</button>
                                : <button onClick={() => props.follow(user.id)}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};