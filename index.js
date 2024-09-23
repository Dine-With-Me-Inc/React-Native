/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { UserProvider } from './src/Context/UserContext';

const RootApp = () => (
  <UserProvider>
    <App />
  </UserProvider>
);

AppRegistry.registerComponent(appName, () => RootApp);