import React from 'react'

const DisplayList = ({data, album, play}) => {
    console.log('displaylist', data)
    const renderAlbumList = () => (
        <ul className="displayList">
            {data.map((item, i) => (
                <li className="displayListItem" key={i} onClick={() => play(item.album.tracks.items[0])}>
                    <img src={item.album.images[0].url} alt={'img'}/>
                    {/*<p>{item.album.name}</p>*/}
                </li>
            ))}
        </ul>
    )
    if (!data) return 'loading...'
    return renderAlbumList()
}

export default DisplayList
