import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';


const Task = ({ route, navigation }) => {
    const { taskTitle } = route.params;

   

    return (
        <View>
            <Text>
                {taskTitle}
            </Text>
        </View>
    )
}

export default Task;