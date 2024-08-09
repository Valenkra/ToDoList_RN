import { TextInput, StyleSheet } from "react-native";
import { View } from "react-native";
import { Colors } from "../resources/Colors";
import { scale } from "react-native-size-matters";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import MyButton from "./MyButton"

const InputValues = ({ToDos, setToDos}) => {
    const submiting = (e) => {
        setToDos([{
            contenido: e.nativeEvent.text,
            tachado: false,
            fechaYhoraCreacion: new Date(),
            fechaYhoraTachado: false
          }, ...ToDos]);
    }
    return (

        <View>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <TextInput
                        placeholder="¿Qué necesitas hacer?" 
                        style={styles.input}
                        onSubmitEditing={submiting}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        marginTop: 50,
        backgroundColor: Colors.white,
        width: scale(300),
        padding: scale(10),
        borderRadius: scale(3),
    }
})
export default InputValues;