import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

// import { Container } from './styles';
import TabsNavigator from './navigation/TabsNavigator';
import theme from './styles/theme';

const App = () => {
	return (
		<>
			<StatusBar  barStyle="dark-content" backgroundColor={theme.BACKGROUND} />
			<TabsNavigator />
		</>
	)
}

export default App;