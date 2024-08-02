import { useState } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { CheckBox } from "react-native-elements"
import { scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../Colors";

const ToDo = ({title}) => {
    const [checked, setChecked] = useState(false);

    const change = () => {
        (checked == false) ? setChecked(true) : setChecked(false);
    }
    return (
        <View style={styles.container}>
            <CheckBox  onPress={change} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={checked}/>
            <Text style={styles.label}>{title}</Text>
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
    },
    label: {
        fontSize: scale(15.4),
        color: Colors.black
    }
})

export default ToDo;