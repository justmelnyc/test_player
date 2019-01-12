import React from 'react'


const Navigator = ({list}) => {


    return (
        <ul className="nav flex-md-column flex-nowrap justify-content-center" style={{overflowY: 'scroll', height:'400px'}}>
            {list.map(item => {
                return <li className="nav-item">
                    <a className="nav-link" href="#">Channel</a>
                </li>
            })}

        </ul>
    )

}

export default Navigator



