import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default function WebBrowserButton() {
    const [result, setResult] = useState<WebBrowser.WebBrowserResult>();

    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://google.com');
        setResult(result);
    };
    return (
        <View style={styles.container}>
            <Button title="Wanna see magic?" onPress={_handlePressButtonAsync} />
            <Text>{result && JSON.stringify(result)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        borderRadius: 4,
        paddingTop: Constants.statusBarHeight,
    },
});