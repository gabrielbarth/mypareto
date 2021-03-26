import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue
} from 'react-native-reanimated';

import profile from '../../assets/profile.png';
import theme from '../../styles/theme';
import TaskCard from '../../components/TaskCard';

const cardColors = [theme.LIGHT_BLUE, theme.LIGHT_ORANGE, theme.LIGHT_PURPLE];

const tasks = [
	{ title: 'Saúde' },
	{ title: 'Espiritualidade' },
	{ title: 'Finanças' },
	{ title: 'Lazer' },
	{ title: 'Finanças' },
	{ title: 'Lazer' },
	{ title: 'Finanças' },
	{ title: 'Lazer' },
];

const Pareto = ({ navigation }) => {
	const scrollY = useSharedValue(0);
	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollY.value = event.contentOffset.y;
	});

	const headerStyle = useAnimatedStyle(() => {
		return {
			height: interpolate(
				scrollY.value,
				[0, 180],
				[230, 20],
				Extrapolate.CLAMP
			)
		};
	});

	const imageStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(
				scrollY.value,
				[100, 150],
				[1, 0],
				Extrapolate.CLAMP
			),
		};
	});

	const navigateToTask = (taskTitle) => {
		navigation.navigate('Task', { taskTitle });
	}

	return (
		<View style={styles.container}>
			<Animated.ScrollView
				contentContainerStyle={{ paddingTop: 230, flexDirection: 'row', flexWrap: 'wrap' }}
				onScroll={scrollHandler}
				scrollEventThrottle={16}
			>
				{tasks.map((task, index) => {
					let randomColor = Math.floor(Math.random() * cardColors.length);

					return (
						<TaskCard
							onPress={() => navigateToTask(task.title)}
							key={index}
							color={cardColors[randomColor]}
						>
							{task.title}
						</TaskCard>
					);
				})}
			</Animated.ScrollView>

			<Animated.View style={[
				{ backgroundColor: theme.LIGHT_BLUE },
				styles.header,
				headerStyle
			]}>
				<Animated.Image source={profile} style={[styles.imageContainer, imageStyle]} />
				<Text style={{ color: theme.DARK_GRAY, ...styles.textUserName }} > Gabriel Barth Silvério </Text>
			</Animated.View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.BACKGROUND,
		flex: 1,
	},
	header: {
		height: 230,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		position: 'absolute',
		overflow: 'hidden',
		left: 0,
		right: 0,
		top: 0
	},
	imageContainer: {
		width: 160,
		height: 160,
		borderRadius: 80,
		marginBottom: 20
	},
	textUserName: {
		fontWeight: 'bold',
		fontSize: 20
	}
});

export default Pareto;