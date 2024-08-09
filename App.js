import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from './resources/Colors.js';
import InputValues from './components/input.js';
import { useState } from 'react';
import ListToDo from './components/listToDo.js';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [ToDos, setToDos] = useState(AsyncStorage.getItem("TODO") ? JSON.parse(AsyncStorage.getItem("TODO")) : []);
  useEffect(()=> {
    if(ToDos){
      AsyncStorage.setItem("TODO", JSON.stringify(ToDos));
    }
  }, [ToDos])

  console.log(ToDos)


  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: scale(30), fontWeight: 600, color: Colors.orange}}>To Do's</Text>
        </View>
        <View style={styles.fixedContainer}>
          <ScrollView>
            <ListToDo ToDos={ToDos} setToDo={setToDos}></ListToDo>
          </ScrollView>
        </View>
        
        <InputValues ToDos={ToDos} setToDos={setToDos}></InputValues>
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
  },
  fixedContainer: {
    width: '100%',
    height: verticalScale(200),
  }
});
