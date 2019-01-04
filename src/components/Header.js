import React from 'react';
import profile from '../media/profile.png';


const Header = ({ user }) => {
    if (user)
        return (
            <div className="header">
                <div className="header__BackButton">
                    <h1>
                        <a style={{ color: '#1DB954' }} href="https://github.com">
                            signal
                        </a>
                    </h1>
                </div>
                {/*{user.images[0] ? (*/}
                    {/*<div className="header__Profile">*/}
                        {/*<img src={user.images[0].url}/>*/}
                        {/*<a>{user.display_name}</a>*/}
                    {/*</div>*/}
                {/*) : (*/}
                    {/*<div className="header__Profile">*/}
                        {/*<a>{user.id}</a>*/}
                    {/*</div>*/}
                {/*)}*/}
            </div>
        );
    else {
        return (
            <div className="header">
                <div className="header__BackButton"/>
                <div className="header__Profile">
                    <div className="header__Profile">
                        <img alt={'profile'} src={profile}/>
                        <p>Lounge</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;
