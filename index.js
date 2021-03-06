import React from 'react'
import { AppRegistry, View, Text } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => {
  return (
    <View>
      <Header text={ "Albums" } />
      <AlbumList />
    </View>
  )
}

AppRegistry.registerComponent('albums', () => App)
