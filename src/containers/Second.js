import React, { Component } from 'react';
import { Container, Content, Text, Card, Body, Button, Title, CardItem, Left, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Layout from './Layout';

export default class second extends Component {
  render(){
    return(
      <Layout title="second page">
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  This is Page One, Press button to goto page two
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button dark bordered
            onPress= {() => {Actions.first(); }}>
            <Text>Goto Page 1</Text>
         </Button>
         <Button dark bordered
           onPress= {() => {Actions.third(); }}>
           <Text>Goto Page 3</Text>
        </Button>
        </Content>
      </Layout>
    );
  }
}
