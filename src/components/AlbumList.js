import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  state = {
    albums: []
  }

  render() {
    const { viewStyle } = styles
    const albums = this.state.albums

    if(albums.length == 0) {
      return (
        <View style={ viewStyle }>
          <Text>Loading. . .</Text>
        </View>
      )
    }

    return (
      <View style={ viewStyle }>
        {
          albums.map((album, i) => <AlbumDetail key={ i } album={ album } />)
        }
      </View>
    )
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
  }
}

const styles = {
  viewStyle: {
    marginTop: 10
  }
}

export default AlbumList
