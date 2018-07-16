        /**
         * Sample React Native App
         * https://github.com/facebook/react-native
         *
         * @format
         * @flow
         */

        import React, {Component} from 'react';
        import {Text, View} from 'react-native';

        import {Container, StyleProvider} from 'native-base';

        import getTheme  from './src/themes/components';
        import DouxTheme from './src/themes/variables/DouxTheme';

        import AppHeader from './src/components/appHeader';
        import reAppBody from './src/components/appBody';
        import AppFooter from './src/components/appFooter';



        export default class App extends Component {
          render() {
            return (
        //<StyleProvider style={getTheme(DouxTheme)}>
        <Container>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
        </Container>
        //</StyleProvider>



            );
          }
        }

