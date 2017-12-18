import React from 'react'
import { View, Text } from 'react-native'

const AlbumDetail = props => {
  const { viewStyle } = styles

  return (
    <View style={ viewStyle }>
      <Text>{ props.album.title }</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    marginTop: 10
  }
}

export default AlbumDetail
