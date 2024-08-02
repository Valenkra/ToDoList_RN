import { useState } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { CheckBox } from "react-native-elements"

export default ToDo = ({title}) => {
    const [checked, setChecked] = useState(false);

    const change = () => {
        (checked == false) ? setChecked(true) : setChecked(false);
    }
    return (
        <View>
            <CheckBox onPress={change} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={checked}/>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center'
    }
})