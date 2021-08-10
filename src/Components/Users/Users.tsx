import React from "react";
import s from "./users.module.css";
import {usersType} from "../../redux/UsersReducer";
import { NavLink } from "react-router-dom";

type UsersFuncPropsType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    pageClickedCallback: (page: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void}

export const Users = (props: UsersFuncPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span onClick={() => {
                        props.pageClickedCallback(page);
                    }} className={props.currentPage === page ? s.selectedPage : ''}>{page}</span>;
                })}

            </div>
            {
                props.users.map(user =>

                    <div>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`} >
                                  <img className={s.photo}
                                       src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_E6mVH-jjV4_zGfvAaLKnju8nvJ0OV87lpA&usqp=CAU'}/>
                            </NavLink>

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