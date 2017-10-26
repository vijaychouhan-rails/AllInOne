import React, { Component } from 'react';
import { Container, Content, Text, Card, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Layout from './Layout';

export default class first extends Component {
  render(){
    return(
      <Layout title="first page">
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
        <Button dark bordered style = {{alignSelf: 'center', margin: 30}}
          onPress= {() => {Actions.second(); }}>
          <Text>Goto Page 2</Text>
        </Button>
        <Button dark bordered style = {{alignSelf: 'center', margin: 30}}
          onPress= {() => {Actions.third(); }}>
          <Text>Goto Page 3</Text>
        </Button>
       </Content>
      </Layout>
    );
  }
}
