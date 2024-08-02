import { TextInput, StyleSheet } from "react-native";
import { View } from "react-native";
import { Colors } from "../Colors";
import { scale } from "react-native-size-matters";

const InputValues = () => {
    return (
            <TextInput   value={34}
        placeholder="useless placeholder" style={styles.input}/>
    );
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        marginTop: 50,
        backgroundColor: Colors.white,
        width: scale(70)

    }
})
export default InputValues;