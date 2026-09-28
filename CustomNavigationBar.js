import {Appbar} from 'react-native-paper';
import * as React from "react";

export default function CustomNavigationBar() {
    return (
        <Appbar.Header>
            <Appbar.Content title="Trivia"/>
        </Appbar.Header>
    );
}