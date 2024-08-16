import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import {Colors} from "../resources/Colors.js"

const MyButton = ({sendText}) => {
    return (
        <Button style={styles.btn}>{sendText}</Button>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#000000',
    }
});

export default MyButton;