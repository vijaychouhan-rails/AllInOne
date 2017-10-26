import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import {Content, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Sidebar extends Component {
  render() {
    return (
      <Content style={{backgroundColor:'#FFFFFF'}}>
        <Button dark bordered
          onPress= {() => {this.props.closeDrawer(); Actions.first(); }}>
          <Text>Goto Page 1</Text>
       </Button>
       <Button dark bordered
         onPress= {() => {this.props.closeDrawer(); Actions.second(); }}>
         <Text>Goto Page 2</Text>
      </Button>
      <Button dark bordered
        onPress= {() => {this.props.closeDrawer(); Actions.third(); }}>
        <Text>Goto Page 3</Text>
     </Button>
      </Content>
    );
  }
}
