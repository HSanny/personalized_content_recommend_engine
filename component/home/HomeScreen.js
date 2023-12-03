import React from 'react';
import { View, Text, Card, Button, Colors } from 'react-native-ui-lib';
import LoginScreen from '../login/loginScreen';

export default function HomeScreen() {

    const [showlogin, setShowlogin] = React.useState(false);
    const [showSignup, setShowSignup] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShowlogin(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <View flex backgroundColor='#5760a6'>
            {
                !showlogin? (
                    <Card flex center backgroundColor='#5760a6' >
                        <Card.Section
                            content={[
                                {
                                    text: 'Please choose to login or sign up!',
                                    text70: true,
                                    grey10: true,
                                }
                            ]}
                            contentStyle={{
                                alignItem: 'center'
                            }}
                        />
                        <View>
                            <Button
                                label={'Login'}
                                size={Button.sizes.medium}
                                backgroundColor={Colors.blue20}
                                onPress={() => { setShowlogin(true); }}
                            />

                            <Button
                                label={'Sign Up'}
                                size={Button.sizes.medium}
                                backgroundColor={Colors.blue20}
                                onPress={() => { setShowSignup(true); }}
                            />
                        </View>
                    </Card>
                ) : (<LoginScreen />)
            }
        </View>
    )
}