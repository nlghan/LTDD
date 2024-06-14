/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './screens/home/Login';
import {name as appName} from './app.json';
import Register  from './screens/home/RegisterScreen';

AppRegistry.registerComponent(appName, () => Login);
