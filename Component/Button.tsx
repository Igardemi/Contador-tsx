import React from 'react';
import {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: String;
  position?: 'bl' | 'br';
  onPress: () => void;
}

export const Button = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          styles.botonLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}
        onPress={onPress}>
        <View style={styles.boton}>
          <Text style={styles.botonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <View
        style={[
          styles.botonLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('white', false, 30)}>
          <View style={styles.boton}>
            <Text style={styles.botonText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  botonLocation: {
    position: 'absolute',
    bottom: 25,
    borderRadius: 100,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  boton: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  botonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
