import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Third extends React.Component {
  render() {
    return (
      <View>
        <View><Text> This is Third page</Text></View>
        <View><Text> This is Third page</Text></View>
        <View><Text> This is Third page</Text></View>
        <View><Text> This is Third page</Text></View>
        <View><Text> This is Third page</Text></View>
        <View><Text> This is Third page</Text></View>
        <View><Text> This is Third page</Text></View>
        <TouchableOpacity onPress={() => Actions.first()}>
          <Text>First</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.second()}>
          <Text>Second</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Third;
