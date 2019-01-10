import React from 'react'


const Header = ({user}) => {
    if (user)

        return (
            <div className='header'>
                <div className='header__BackButton'/>
                <div className='header__Profile'>
                    <div className='header__Profile '>
                        <img className='interactive' alt={'profile'}
                             src='http://commercial-song.net/wp-content/uploads/2018/02/Nike_Mercurial_Commercial.jpg'/>
                        <h2 className='interactive'>Bome Theater</h2>
                    </div>
                </div>
            </div>
        )

}

export default Header
