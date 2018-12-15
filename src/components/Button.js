import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()}>
                <View {...this.props} />
            </TouchableNativeFeedback>
        )
    }
}