import React from 'react';
import '../../App/App.scss';
import ProfileDetails from './ProfileDetails';
import data from '../../data.json';

const Profile = () => {

  const profile = data.profile;

  return (
    <div className="App">
         <div className='container'>
            <h2>Profile</h2>
            <div style={{display: 'flex'}}>
                <div className='col'>
                    <img className="avatar" src={profile.avatarImage} />
                </div>
                <div className='col-2'>
                  <ProfileDetails profile={profile}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile