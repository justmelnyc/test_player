import React from 'react'
import Spinner from '../Spinner/Spinner'

const DataList = ({data, play}) => {
    // console.log('displaylist', data)
    const renderAlbumList = () => (
        <section>
            <div className="container-fluid container-fluid--noSpaceAround">
                <ul className="displayList">
                    {data.map((item, i) => (
                        <li className="displayListItem" key={i} onClick={() => play(item.source)}>
                            <img src={item.poster} alt={'img'}/>
                            {/*<p>{item.album.name}</p>*/}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
    if (!data) return <Spinner/>
    return renderAlbumList()
}

export default DataList
