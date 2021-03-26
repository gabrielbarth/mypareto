import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';


const TaskCard = ({ children, color, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{ backgroundColor: color, ...styles.container }}
        >
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width / 2) - 20,
        height: (Dimensions.get('window').width / 2) - 20,
        margin: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    }
})

export default TaskCard;



