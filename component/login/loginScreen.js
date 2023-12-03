import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Card, TextField, Button } from "react-native-ui-lib";
import CustomButton from "../../common/components/button";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5760a6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        backgroundColor: '#F5EEDC',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    inputField: {
        padding: 14,
        fontSize: 22,
        width: '90%'
    }
});

class loginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.s
    }

    render() {
        return (
            <View>
                <Card>
                    <View>
                        <Text> Register Form </Text>
                    </View>
                    <View>
                        <Text> Name </Text>
                        <TextField placeholder={'please input account name'} />
                    </View>
                    <View>
                        <Text> Email </Text>
                        <TextField placeholder={'plase input email'} />
                    </View>
                    <View>
                        <Text> Password </Text>
                        <TextField placeholder={'please input your password'} />
                    </View>
                    <View>
                        <Text> Confirm Password </Text>
                        <TextField placeholder={'please confirm your password'} />
                    </View>
                    <Button
                        label={'Submit'}
                        size={Button.sizes.medium}
                        backgroundColor={Colors.blue20}
                        onPress={() => { setShowlogin(true); }}
                    />

                    <Button
                        label={'Cancel'}
                        size={Button.sizes.medium}
                        backgroundColor={Colors.blue20}
                        onPress={() => { setShowSignup(true); }}
                    />
                </Card>
            </View>
        )
    }
};

export default loginScreen;