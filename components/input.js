import { TextInput, StyleSheet } from "react-native";
import { View } from "react-native";
import { Colors } from "../resources/Colors";
import { scale } from "react-native-size-matters";
import { Button } from "react-native-elements";

const InputValues = ({ToDos, setToDos}) => {
    const submiting = (e) => {
        setToDos([...ToDos, {
            contenido: e.nativeEvent.text,
            tachado: false,
            fechaYhoraCreacion: new Date(),
            fechaYhoraTachado: false
          }]);
    }
    return (
        <TextInput
        placeholder="¿Qué necesitas hacer?" 
        style={styles.input}
        onSubmitEditing={submiting}/>
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