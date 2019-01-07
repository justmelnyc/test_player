import React, {Component} from 'react'
import axios from 'axios'

import Container from '../../components/Container'
import TitleSubtitle from '../../components/TitleSubtitle'
import DisplayList from '../../components/DisplayList'


class Browse extends Component {

    state = {
        albums: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4200/albums`)
            .then(res => {
                const albums = res.data.list.items
                this.setState({albums})
            })
            .catch(err => console.log(err))
    }


    render() {

        const {albums} = this.state
        return (
            <Container>
                <TitleSubtitle title="Home"/>
                <DisplayList data={albums}/>

                {/*<SongList data={this.props.songs.items} onItemClick={this.props.play} />*/}
            </Container>
        )
    }
}

export default Browse
