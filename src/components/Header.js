import React from 'react'
import profile from '../media/profile.png'


const Header = ({user}) => {
    if (user)

        return (
            <div className="header">
                <div className="header__BackButton"/>
                <div className="header__Profile">
                    <div className="header__Profile">
                        <img alt={'profile'} src={profile}/>
                        <p>Bome Theater</p>
                    </div>
                </div>
            </div>
        )

}

export default Header
