
import React, {Component} from 'react';
import { Image} from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';


export default class AppHeader extends Component {
  render() {
    return (

        <Header>

        <Left>
                    <Button transparent>
                      <Icon name='arrow-back' />
                      <Text>Back</Text>
                    </Button>
                  </Left>
                  <Body>
                   <Image source={require('../img/doux_icon.fw.png')}
                                       style={{width:160, height:35}}/>
                  </Body>
                  <Right>
                  <Button transparent>
                            <Icon name='heart' onPress={() => alert("You Clicked on Heart")} />
                          </Button>
                    <Button transparent>
                                  <Icon name='menu' />
                                </Button>

                  </Right>


         </Header>


    );
  }
}

module.export = AppHeader;

