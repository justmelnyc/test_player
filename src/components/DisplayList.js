import React from 'react'
import Spinner from './Spinner/Spinner'

const DisplayList = ({data, album, play}) => {
    // console.log('displaylist', data)
    const renderAlbumList = () => (
        <ul className="displayList">
            {data.map((item, i) => (
                <li className="displayListItem" key={i} onClick={() => play(item.source)}>
                    <img src={item.album.images[0].url} alt={'img'}/>
                    {/*<p>{item.album.name}</p>*/}
                </li>
            ))}
        </ul>
    )
    if (!data) return <Spinner/>
    return renderAlbumList()
}

export default DisplayList
