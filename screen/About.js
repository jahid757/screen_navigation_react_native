import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

const About = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>This is About Page</Text>
      <TouchableOpacity style={styles.text}>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
          color="coral"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.text}>
        <Button
          title="Go To Reviews"
          onPress={() => navigation.navigate("Reviews")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    marginVertical: 10,
  },
});

export default About;
