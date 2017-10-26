import React, { Component } from 'react';
import { Drawer, Container, Content, Text, Card, Body, Button, Title, CardItem, Header, Left, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Sidebar from './Sidebar';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  closeDrawer() {
    this.drawer._root.close()
  };

  openDrawer() {
    this.drawer._root.open()
  };

  render(){
    return(
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar closeDrawer={this.closeDrawer}/>}
        onClose={() => this.closeDrawer()} >
        <Container>
          <Header hasTabs={!!this.props.hasTabs}>
            <Left>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>{ this.props.title }</Title>
            </Body>
          </Header>
          {this.props.children}
        </Container>
      </Drawer>
    );
  }
}
