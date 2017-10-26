import React, { Component } from 'react';
import { Container, Content, Text, Card, Body, Button, Title, CardItem } from 'native-base';

export default class Tab3 extends Component {
  render(){
    return(
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>
                This is tab3
              </Text>
            </Body>
          </CardItem>
        </Card>
       </Content>
    );
  }
}
