import { Button } from "react-native-paper"

export default function AnswerButton(props) {
    return (
        <Button textColor="#ffffff" buttonColor='#065c1c' onPress={() => {props.function(props.answer)}}>Show</Button>
    );
}

