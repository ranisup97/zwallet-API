import React from "react"

const Profile = (props) => {
    const {fav} = props
    return(
        <div>
        <h4>Profile</h4>
            {fav.map((person, index) => {
                return(
                    <div>
                        <p>{person.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Profile