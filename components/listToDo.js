import { View, Text } from "react-native";
import ToDo from "./todo";

const ListToDo = ({ToDos, setToDo}) => {
    const views = [];
        for (let i = 0; i < ToDos.length; i++) {
            views.push(
                <ToDo element={ToDos[i]}></ToDo>
            );
        }
        return views;
    }

export default ListToDo;