import React from 'react';
import { View } from 'react-native';

const componentName = ({
    children, style, ...rest
}) => (
    <View style={style}>
        {children}
    </View>
);

export default componentName;
