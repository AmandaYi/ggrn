import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
import 'url-search-params-polyfill';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Root from './app/Root';
AppRegistry.registerComponent('ggnf', () => Root);

// import App from './App';
// AppRegistry.registerComponent('xlsapp', () => App);


