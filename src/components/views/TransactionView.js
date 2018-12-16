import React from 'react';
import Barcode from 'react-native-barcode-builder';
import { View, Text, StyleSheet, UIManager, NativeModules, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

const styles = StyleSheet.create({
    container: {
        top: Dimensions.get('window').height * 0.15,
        alignItems: 'center',
    },
    idCard: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 30
    },
    label: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    timeoutLabel: {
        fontSize: 18,
    },
    idContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        backgroundColor: '#00000000'
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5
    }
});

const keyLength = 20;
const timeout = 300;

export default class TransactionView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            key: this.generateKey(keyLength),
            expTime: timeout
        };
        this.startCountdown();
    }

    startCountdown() {
        this.interval = setInterval(() => {
            if (this.state.expTime === 0) this.updateKey();
            this.setState({ expTime: this.state.expTime - 1 });
        }, 1000);
    }

    generateKey(length) {
        var text = '';
        var possible = '0123456789';

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    updateKey = () => {
        this.setState({ key: this.generateKey(keyLength) });
        this.setState({ expTime: timeout });
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.idContainer}>
                        <View style={[styles.idCard, styles.shadow]}>
                            <Text style={[styles.label, { color: "#FB8C00" }]}>Ключ за плащане:</Text>
                            <Barcode background='#00000000' value={this.state.key} format='CODE128' />
                            <Text style={[styles.label, { fontSize: 20 }]}>{this.state.key}</Text>
                            <Text style={[styles.timeoutLabel]}>Оставащо време: {this.state.expTime}s</Text>
                        </View>
                        <RaisedTextButton
                            onPress={this.updateKey}
                            title="Понови Ключа"
                            color="#FB8C00"
                            titleColor='white'
                        />
                    </View>
                </View>
            </View>
        );
    }

    static contextTypes = {
        uiTheme: PropTypes.object.isRequired,
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
    };
}