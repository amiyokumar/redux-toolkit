import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeUser,deleteUsers } from '../store/slices/UserSlice';

function DisplayUsers() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.users);

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }

    const deleteAllUser =() => {
      dispatch(deleteUsers())
    }

    return (
        <Wrapper>
            <ul>
                {data.map((user, id) => (
                    <li key={id} className="user-item">
                        <span className="username">{user}</span>
                        <button className="btn btn-delete" onClick={() => deleteUser(id)}>
                            <MdDeleteForever className="delete-icon" />
                        </button>
                    </li>
                ))}
                <button onClick={()=> deleteAllUser()}>Delete all user</button>
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    margin: 1rem 1.2rem;

    ul {
        padding: 0;
    }

    .user-item {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding: 0.5rem;
        background: #f9f9f9;
        border-radius: 5px;
    }

    .username {
        flex: 1;
        margin-right: 1rem;
    }

    .delete-icon {
        font-size: 1.6rem;
        color: #f12711;
        filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
        cursor: pointer;
    }

    @media screen and (max-width: 998px) {
        .user-item {
            flex-direction: column;
            align-items: flex-start;
        }
    }
`;

export default DisplayUsers;
