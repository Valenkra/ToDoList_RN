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

    const getLabelStyle = (isChecked) => {
        return [styles.label, 
            (isChecked == true) ? styles.checked : styles.unchecked]
    }

    return (
        <View style={getContainerStyle(checked)}>
            <CheckBox onPress={change} checkedIcon='dot-circle-o' checkedColor={Colors.orange} uncheckedIcon='circle-o' checked={checked}/>
            <Text style={getLabelStyle(checked)}>{element.contenido}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: verticalScale(20),
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: Colors.white,
        width: '80%',
        backgroundColor: Colors.white,
        paddingVertical: verticalScale(5),
        borderRadius: scale(3),

    },
    label: {
        fontSize: scale(15.4),
        color: Colors.black,
        paddingTop: verticalScale(13)
    },
    checked: {
        backgroundColor: Colors.grey,
        color: Colors.white,
        textDecorationLine: 'line-through',

    },
    unchecked: {

    }
})

export default ToDo;