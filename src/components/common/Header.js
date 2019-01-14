// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
    );
};

const styles = {
    viewStyle: {
      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      paddingTop: 30,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 20
    }
  };

//Make the component available to other parts of the app
export { Header };
