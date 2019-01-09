import React from 'react'
import profile from '../media/profile.png'


const Header = ({user}) => {
    if (user)

        return (
            <div className='header'>
                <div className='header__BackButton'/>
                <div className='header__Profile'>
                    <div className='header__Profile '>
                        <img className='interactive' alt={'profile'} src={profile}/>
                        <h2 className='interactive'>Bome Theater</h2>
                    </div>
                </div>
            </div>
        )

}

export default Header
