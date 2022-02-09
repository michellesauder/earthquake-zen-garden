import React from 'react'

const ProfileTemplate = ({ profile }) => {

    const profileFields = [
        { label: "First Name", value: "firstName" },
        { label: "Last Name", value: "lastName" },
        { label: "Phone", value: "phone" },
        { label: "Email", value: "email" },
        { label: "Bio", value: "bio" }
      ]

    const profileDetails = [];
    profileFields.map(field => {
        profileDetails.push(
            <div className='row' key={field.value}>
                <div className="profile">
                    <div className='title'>
                        {field.label}
                    </div>
                    <div className='value'>
                    { profile[field.value]}
                    </div>
                </div>
            </div>
        )
    })

    return (<div>{profileDetails}</div>)
}

export default ProfileTemplate
