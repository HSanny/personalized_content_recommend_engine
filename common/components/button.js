import React from 'react';
import { Button } from 'react-native-ui-lib'; 
import PropTypes from 'prop-types'

const CustomButton = ({ iconSource, onPress, label }) => (
    <Button
        link
        marginR-5
        iconSource={iconSource}
        $iconDefault
        onPress={onPress}
        label={label}
    />
);

// CustomButton.propTypes = {
//     iconSource: PropTypes.string.isRequired,
//     onPress: PropTypes.func.isRequired,
// };

export default CustomButton;