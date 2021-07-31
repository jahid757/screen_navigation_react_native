import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import HomeStack from './routes/HomeStack';

const App = () => {
  return (
    <HomeStack/>
  );
}

const styles = StyleSheet.create({
  text:{
    fontFamily:'Georama'
}
})

export default App;
