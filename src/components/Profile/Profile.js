import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Profile.css';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogOut=()=> {
        setLoggedInUser({});
    }
    return (
        <div className="profile">
            <h3 contentEditable='true'>Name:{loggedInUser.displayName}</h3>
            <p>Email:{loggedInUser.email}</p>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    );
};

export default Profile;