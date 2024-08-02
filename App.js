import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ToDo from './components/todo.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>To Do's</Text>
      </View>
      <ToDo title="Soy puta"></ToDo>
      <Text style={styles.text}>Soy tu amiga Valen, una trolsita azul cariñosita</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/img/trolls.webp')} style={{width:200, height:300}}/>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 40
  },
  header:{
    flex: 1,
    backgroundColor: '#000000',
    width: '100%'
  }
});
