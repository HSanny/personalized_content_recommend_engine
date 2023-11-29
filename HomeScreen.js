import React from 'react';
import { View } from 'react-native-ui-lib';
import { Card } from 'react-native-ui-lib/card';
import './common/style';

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
            <Card>

            </Card>
        </View>
    )
}