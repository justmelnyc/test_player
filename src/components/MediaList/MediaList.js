import React from 'react'


const MediaList = ({data, play}) => {

    return (
        <ul className="displayList">
            {data.map((item, i) => (
                <li className="displayListItem" key={i} onClick={() => play(item.source)}>
                    <img src={item.poster} alt={'img'}/>
                    {/*<p>{item.album.name}</p>*/}
                </li>
            ))}
        </ul>
    )

}

export default MediaList
