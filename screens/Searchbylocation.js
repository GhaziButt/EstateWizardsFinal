import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class SearchByLocation extends Component{
    render(){
       return(
               <View style= {styles.container}>
               <Text> Here are all the ads of Searched Location! </Text>
              </View>
        );
    }
}

export default SearchByLocation;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

