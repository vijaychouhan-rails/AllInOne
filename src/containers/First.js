import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class First extends React.Component {
  render() {
    return (
      <View>
        <View><Text> This is first page</Text></View>
        <View><Text> This is first page</Text></View>
        <View><Text> This is first page</Text></View>
        <View><Text> This is first page</Text></View>
        <View><Text> This is first page</Text></View>
        <View><Text> This is first page</Text></View>
        <View><Text> This is first page</Text></View>
        <TouchableOpacity onPress={() => Actions.second()}>
          <Text>Second</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.third()}>
          <Text>Third</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default First;
