import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { rippleColor, rippleCircular, onPress, ...rest } = this.props;
        return (
            <TouchableNativeFeedback 
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple(rippleColor || void 0, rippleCircular === true)}>
                <View {...this.props} />
            </TouchableNativeFeedback>
        )
    }
}