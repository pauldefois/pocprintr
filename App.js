import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Title from './src/components/Title';
import FormInputText from './src/components/FormInputText';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Title title='POC PrintR' />

				<FormInputText label='Username' />
				<FormInputText label='Password' secure={true} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		//justifyContent: 'center',
		marginTop: 60
	}
});
