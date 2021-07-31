import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Home from './screen/Home';

const App = () => {
  return (
    <View>
      <Text style={styles.text}>This is home screen all</Text>
      <Text>This is home screen all</Text>
    <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontFamily:'Georama'
}
})

export default App;
