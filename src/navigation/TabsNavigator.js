import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import TabComponent from '../components/TabComponent';

const Tab = createBottomTabNavigator();

import Pareto from '../pages/Pareto';
import Week from '../pages/Week';
import Today from '../pages/Today';

const Stack = createStackNavigator();

import Task from '../pages/Task'

const ParetoStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Pareto'
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name='Pareto' component={Pareto} />
            <Stack.Screen name='Task' component={Task} options={{ unmountOnBlur: true }} />
        </Stack.Navigator>
    )
}


const TabsNavigator = ({ navigation }) => {
    console.log(navigation)

    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen
                    name='Semana'
                    component={Week}
                    options={{
                        tabBarButton: (props) =>
                            <TabComponent iconName='calendar-range' tabTitle='semana' {...props} />
                    }}
                />
                <Tab.Screen
                    name='Hoje'
                    component={Today}
                    options={{
                        tabBarButton: (props) =>
                            <TabComponent iconName='calendar' tabTitle='hoje' {...props} />
                    }}
                />
                <Tab.Screen
                    name='Pareto'
                    component={ParetoStackNavigator}
                    options={{
                        tabBarButton: (props) =>
                            <TabComponent
                                iconName='image-filter-center-focus-strong'
                                tabTitle='pareto'
                                {...props}
                            />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabsNavigator;