import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import CustomButton from "../../common/components/button";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5760a6',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Login to you account !
                </Text>
            </View>
        )
    }
};

export default Login;