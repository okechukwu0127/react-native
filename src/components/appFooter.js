
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


export default class AppFooter extends Component {
  render() {
    return (

        <Footer>
                  <FooterTab>
                    <Button active>
                      <Icon name="apps" />
                      <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                      <Icon name="camera" />
                      <Text>Camera</Text>
                    </Button>
                    <Button vertical active>
                      <Icon active name="navigate" />
                      <Text >Navigate</Text>
                    </Button>

                  </FooterTab>
         </Footer>

    );
  }
}



module.export = AppFooter;

