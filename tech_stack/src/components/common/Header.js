// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    // const { textStyle, viewStyle } = styles;

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30,
        color: '#000'
    }
};

// Make the component available to others
export { Header };
