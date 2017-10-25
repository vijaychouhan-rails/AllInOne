import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Second extends React.Component {
  render() {
    return (
      <View>
        <View><Text> This is Second page</Text></View>
        <View><Text> This is Second page</Text></View>
        <View><Text> This is Second page</Text></View>
        <View><Text> This is Second page</Text></View>
        <View><Text> This is Second page</Text></View>
        <View><Text> This is Second page</Text></View>
        <View><Text> This is Second page</Text></View>
        <TouchableOpacity onPress={() => Actions.first()}>
          <Text>First</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.third()}>
          <Text>Third</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Second;
