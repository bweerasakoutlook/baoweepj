import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Logo from './components/Logo'
import Footer from './components/Footer'

const App = () => {
  const showData = () => {
    alert('Hello Button')
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Logo />
      <Text>Hello TOT React-Native</Text>
      <Text>สวัสดี ทีโอที รีแอคเนทีฟ</Text>
      <Footer year = {2020} subTitle = 'Hello from App' />
      <Button onPress = {showData} title ='Click Me on App.js !!!'></Button>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
