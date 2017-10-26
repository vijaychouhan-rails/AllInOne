import React, { Component } from 'react';
import { Container, Content, Text, Card, Body, Button, Title, CardItem, Tabs, Tab, TabHeading, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Layout from './Layout';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

export default class Third extends Component {
  render(){
    return(
      <Layout hasTabs={true} title="third page">
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Layout>
    );
  }
}
