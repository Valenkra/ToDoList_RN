import { useEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { CheckBox } from "react-native-elements"
import { scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../resources/Colors";
import { Dimensions } from "react-native";


const ToDo = ({index, element, ToDos, setToDo}) => {
    const [checked, setChecked] = useState(element.tachado);
    
    useEffect(() => {
        setChecked(element.tachado)
    }, [ToDos])

    const change = () => {
        (checked == false) ? setChecked(true) : setChecked(false);
        const newToDo = ToDos;
        let miElemento = newToDo.filter(t => t.id === element.id)[0];
        miElemento.tachado =  (checked == false) ? true : false;
        if(miElemento.tachado === true) {
            miElemento.fechaYhoraTachado = new Date();
        }else{
            miElemento.fechaYhoraTachado = false;
        }
        setToDo(newToDo);
    }

    const getContainerStyle = (isChecked) => {
        return [styles.container, 
            (isChecked == true) ? styles.checked : styles.unchecked]
    }

    const getLabelStyle = (isChecked) => {
        return [styles.label, 
            (isChecked == true) ? styles.checked : styles.unchecked]
    }

    const eliminar = () => {
        const newToDo = ToDos.filter(toDo => toDo.id != element.id);
        setToDo([...newToDo])
    }

    return (
        <View style={styles.shadowBox}>
            <View style={getContainerStyle(checked)}>
                <View style={styles.checkBoxContainer}>
                    <CheckBox onPress={change} checkedIcon='dot-circle-o' checkedColor={Colors.orange} uncheckedIcon='circle-o' checked={checked}/>
                    <Text numberOfLines={1} style={getLabelStyle(checked)}>{element.contenido}</Text>
                </View>
                <CheckBox onPress={eliminar} uncheckedIcon='clear' checkedIcon='clear' style={styles.toTheEnd} iconRight iconType='material' checkedColor='red' checked={checked}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.pureBlack,
        paddingVertical: verticalScale(5),
        borderRadius: scale(3),
        paddingHorizontal: scale(15),

    },
    checkBoxContainer: {
        display: 'flex',
        alignContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    shadowBox: {
        backgroundColor: Colors.pureBlack,
        shadowColor: Colors.white,
        shadowOffset: {width: 0, height: 1 },
        shadowOpacity: 2,
    },
    label: {
        fontSize: scale(15.4),
        color: Colors.white,
        paddingTop: verticalScale(13),
        maxWidth: scale(200)
    },
    checked: {
        backgroundColor: Colors.almostGrey,
        color: Colors.white,
        textDecorationLine: 'line-through',

    },
    unchecked: {

    },
    toTheEnd: {
        alignSelf:'flex-end'
    }
})

export default ToDo;