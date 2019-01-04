import React, {Component} from 'react'
import Container from '../components/Container'
import TitleSubtitle from '../components/TitleSubtitle'


class HomePage extends Component {


    render() {
        return (
            <Container>
                <TitleSubtitle title="Recently played tracks"
                               subtitle="Discover new Jazz artists, bands and playlists"/>
                {/*<SongList data={this.props.songs.items} onItemClick={this.props.play} />*/}
            </Container>
        )
    }
}

export default HomePage
