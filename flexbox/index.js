/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import ( Section ) from './App'; dùng kiểu này khi chỉ export
// import Section from './App'; //dùng kiểu này khi export default
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);
