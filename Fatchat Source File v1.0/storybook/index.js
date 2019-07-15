import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native'; // eslint-disable-line

import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';

SplashScreen.hide();

// import stories
configure(() => {
	require('./stories');
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});


AppRegistry.registerComponent('FatChatRN', () => StorybookUIRoot);

export default StorybookUIRoot;
