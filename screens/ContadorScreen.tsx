import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from '../Component/Button';

export const ContadorScreen = () => {
  const [numero, setNumero] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {numero}</Text>

      <Button  title='+1' onPress={() => setNumero(numero + 1)} position='br'/>

      <Button  title='-1' onPress={() => setNumero(numero - 1)} position='bl'/>    
      {/* <TouchableOpacity style={styles.botonLocationBR} onPress={() => setNumero(numero + 1)}>
        <View style={styles.boton}>
          <Text style={styles.botonText}>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonLocationBL} onPress={() => setNumero(numero - 1)}>
        <View style={styles.boton}>
          <Text style={styles.botonText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color:'black',
    fontSize: 40,
    top: -15,
  }
});
