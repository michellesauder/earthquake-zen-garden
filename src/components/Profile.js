import React from 'react';
import '../App.scss';

const Profile = ({ profile }) => {
    return (
        <div className="App">
              <h1>Profile</h1>
            <div className="container" style={{ flexDirection: 'row' }}>
                <img src={profile.avatarImage} />
                <table>
                    <tr> 
                        <td>First Name</td>
                        <td>{profile.firstName}</td>
                    </tr>
                    <tr> 
                        <td>Last Name</td>
                        <td>{profile.lastName}</td>
                    </tr>
                    <tr> 
                        <td>Phone</td>
                        <td>{profile.phone}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{profile.email}</td>
                    </tr>
                    <tr>
                        <td>Bio</td>
                        <td>{profile.bio}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Profile
