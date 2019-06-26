import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

AppRegistry.registerComponent(appName, () => App);