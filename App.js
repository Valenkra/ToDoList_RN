import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ToDo from './components/todo.js';
import { Colors } from './Colors.js';
import InputValues from './components/input.js';
import { TextInput } from 'react-native';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: scale(30), fontWeight: 600, color: Colors.orange}}>To Do's</Text>
        </View>
        <ToDo title="Soy puta"></ToDo>
        <InputValues></InputValues>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: Colors.darkerBlack,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: verticalScale(40)
  },
  text:{
    fontSize: 40
  },
  header:{
    flex: scale(1),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkerBlack,
    shadowColor: Colors.orange,
    paddingVertical: scale(4),
    shadowOffset: {
      width: 0,
      height: 15
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    maxHeight: verticalScale(50),
    marginBottom: verticalScale(20)
  }
});
