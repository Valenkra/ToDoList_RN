import { View, Text } from "react-native";
import Swipeable from 'react-native-gesture-handler';
import ToDo from "./todo";

const ListToDo = ({ToDos, setToDo}) => {
    const views = []
        for (let i = 0; i < ToDos.length; i++) {
            views.push(
                <ToDo index={i} element={ToDos[i]} ToDos={ToDos} setToDo={setToDo}></ToDo>
            );
        }
    return views;
    }

export default ListToDo;