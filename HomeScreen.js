import React from 'react';
import { View } from 'react-native-ui-lib';
import Login from './component/login';

export default function HomeScreen() {

    const [showlogin, setShowlogin] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShowlogin(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <View flex backgroundColor='#5760a6'>
            <Login />
        </View>
    )
}