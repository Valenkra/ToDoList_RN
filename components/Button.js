import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";

const MyButton = ({sendText}) => {
    return (
        <Button>{sendText}</Button>
    );
}

const styles = StyleSheet.create({});

export default MyButton;