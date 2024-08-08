import { useState } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { CheckBox } from "react-native-elements"
import { scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../resources/Colors";

const ToDo = ({element}) => {
    const [checked, setChecked] = useState(element.tachado);
    const change = () => {
        (checked == false) ? setChecked(true) : setChecked(false);
    }

    const getContainerStyle = (isChecked) => {
        return [styles.container, 
            (isChecked == true) ? styles.checked : styles.unchecked]
    }

    return (
        <View style={getContainerStyle(checked)}>
            <CheckBox onPress={change} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={checked}/>
            <Text style={styles.label}>{element.contenido}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: verticalScale(20),
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: Colors.white,
        width: '80%',
        backgroundColor: Colors.white
    },
    label: {
        fontSize: scale(15.4),
        color: Colors.black
    },
    checked: {

    },
    unchecked: {

    }
})

export default ToDo;