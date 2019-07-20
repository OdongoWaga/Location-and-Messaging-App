import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{

  renderMessageList() {
    return (
      <View style={styles.content}></View>
    )
  }

  renderInputMethodEditor() {
    return (
      <View styles={styles.renderInputMethodEditor}></View>
    )
  }

  renderToolbar() {
    return (
      <View style={styles.toolbar}> </View>
    )
  }

  render() {
    return (
      <View style={styles.container}> 
      {this.renderMessageList()}
      {this.renderToolbar()}
      {this.renderInputMethodEditor()}
      </View>
    )
    

  }
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  }, 
  content:{
    flex:1,
    backgroundColor: '#fff'
  },
  renderInputMethodEditor:{
    flex:1,
    backgroundColor: '#fff'
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0, 0.04)'
  },


})


