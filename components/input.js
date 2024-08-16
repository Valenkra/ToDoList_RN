import { TextInput, StyleSheet, Pressable, Dimensions, useWindowDimensions } from "react-native";
import { View, Text } from "react-native";
import { Colors } from "../resources/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import MyButton from "./MyButton"
import { useEffect, useState } from "react";
import { CheckBox } from "react-native-elements"
import { Icon } from 'react-native-elements'

const InputValues = ({ToDos, setToDos}) => {
    const [info, setInfo] = useState("");
    const submiting = (e) => {
        if(info != ""){
            setToDos([...ToDos, {
                id: getMaxId(ToDos) + 1,
                contenido: info,
                tachado: false,
                fechaYhoraCreacion: new Date(),
                fechaYhoraTachado: false
            }]);
            setInfo("");
        }
    }

    const getMaxId = (arr) => {
        let maxValue = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id > maxValue) {
                maxValue = arr[i].id;
            }
        }
        return maxValue;
    }

    const update = (e) => {
        setInfo(e.nativeEvent.text);
    }

    return (

        <View>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View  style={styles.container}>
                    <Icon name='add' color={Colors.orange} style={{marginLeft: scale(16)}}/>
                    <TextInput
                        placeholder="¿Qué necesitas hacer?" 
                        placeholderTextColor={Colors.white}
                        style={styles.input}
                        onChange={update}
                        onSubmitEditing={submiting}
                        clearButtonMode="always"
                        value={info}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        color: Colors.white,
        fontSize: scale(15),
        width: scale(250),
        marginLeft: scale(20)
    },
    buttn: {
        backgroundColor: Colors.blue,
        marginTop: scale(10),
        display: 'flex',
        alignItems: 'center',
        paddingVertical: scale(10),
        borderRadius: scale(3)
    },
    container: {  
        display: 'flex',
        backgroundColor: Colors.grey,
        paddingVertical: verticalScale(5),
        paddingRight: scale(20),
        borderRadius: scale(3),
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(15),
        fontSize: scale(20),
        color: Colors.white,
        width: Dimensions.get('window').width,
        alignContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }
})
export default InputValues;