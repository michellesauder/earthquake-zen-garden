import React from 'react';
import '../../App.scss';
import { data } from '../../data';

const Profile = () => {

  const profile = data.profile

  const fields = [
    { label: "First Name", value: "firstName" },
    { label: "Last Name", value: "lastName" },
    { label: "Phone", value: "phone" },
    { label: "Email", value: "email" },
    { label: "Bio", value: "bio" }
  ]

  const profileTemplate = []

  fields.map(field => {
    profileTemplate.push(
      <div className='row' key={field.value}>
          <div className="profile">
            <div className='title'>
                {field.label}
            </div>
            <div className='value'>
            {   profile[field.value]}
            </div>
        </div>
      </div>
    )
  });

  return (
    <div className="App">
         <div className='container'>
            <h2>Profile</h2>
            <div style={{display: 'flex'}}>
                <div className='col'>
                    <img className="avatar" src={profile.avatarImage} />
                </div>
                <div className='col-2'>
                    {profileTemplate}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile

// const Profile = ({ profile }) => {
//     return (
//         <div className="App">
//               <h1>Profile</h1>
//             <div className="container" style={{ flexDirection: 'row' }}>
//                 <img src={profile.avatarImage} />
//                 <table>
//                     <tr> 
//                         <td>First Name</td>
//                         <td>{profile.firstName}</td>
//                     </tr>
//                     <tr> 
//                         <td>Last Name</td>
//                         <td>{profile.lastName}</td>
//                     </tr>
//                     <tr> 
//                         <td>Phone</td>
//                         <td>{profile.phone}</td>
//                     </tr>
//                     <tr>
//                         <td>Email</td>
//                         <td>{profile.email}</td>
//                     </tr>
//                     <tr>
//                         <td>Bio</td>
//                         <td>{profile.bio}</td>
//                     </tr>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default Profile
