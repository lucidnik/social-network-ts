import React from "react";
import s from "./users.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user =>

                        <div>
                    <span>
                        <div>
                        <img className={s.photo}
                             src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_E6mVH-jjV4_zGfvAaLKnju8nvJ0OV87lpA&usqp=CAU'}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => this.props.unfollow(user.id)}>followed</button>
                                : <button onClick={() => this.props.follow(user.id)}>follow</button>}
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
    }
}

