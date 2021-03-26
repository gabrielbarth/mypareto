import React, { useRef } from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import Animated, {
    Transition,
    Transitioning,
} from 'react-native-reanimated';
import theme from '../../styles/theme';

import Icon from '../Icon';

const bgColors = {
    semana: theme.LIGHT_ORANGE,
    hoje: theme.LIGHT_PURPLE,
    pareto: theme.LIGHT_BLUE
};

const textColors = {
    semana: theme.DARK_ORANGE,
    hoje: theme.DARK_PURPLE,
    pareto: theme.DARK_BLUE,
};

const TabComponent = ({ tabTitle, iconName, accessibilityState, onPress }) => {
    const focused = accessibilityState.selected;

    const transition = (
        <Transition.Sequence>
            <Transition.In type="slide-left"  propagation="left" durationMs={400} />
            <Transition.Change interpolation='easeIn' durationMs={300} />
            <Transition.Out />
        </Transition.Sequence>
    );

    const ref = useRef();

    return (
        <TouchableWithoutFeedback
            style={{ backgroundColor: 'red' }}
            onPress={() => {
                ref.current.animateNextTransition();
                onPress();
            }}>
            <View style={styles.container}>
                <Transitioning.View
                    ref={ref}
                    transition={transition}
                    style={{
                        backgroundColor: focused ? bgColors[tabTitle] : theme.BACKGROUND,
                        ...styles.tabsContainer
                    }}>
                    <Icon active={focused} color={textColors[tabTitle]} name={iconName} />
                    {focused &&
                        <Animated.Text
                            style={[
                                { color: textColors[tabTitle], marginLeft: 6 }
                            ]}
                        >
                            {tabTitle.charAt(0).toUpperCase() + tabTitle.slice(1)}
                        </Animated.Text>
                    }
                </Transitioning.View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND
    },
    tabsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        margin: 6,
    },
});

export default TabComponent;