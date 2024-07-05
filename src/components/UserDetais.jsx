import React from 'react';
import DeleteAllUser from './DeleteAllUser';
import DisplayUsers from './DisplayUsers'; // Import the DisplayUsers component
import styled from 'styled-components';
import fakeUserData from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';

function UserDetails() {
    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        dispatch(addUser(payload));
        console.log(payload);
    }

    return (
        <Wrapper>
            <div className="content">
                <div className="admin-table">
                    <div className="admin-subtitle">List of user Details</div>
                    <button className='btn add-btn' onClick={() => addNewUser(fakeUserData())}>Add New User</button>
                </div>
                <DisplayUsers />
             
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

 
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
