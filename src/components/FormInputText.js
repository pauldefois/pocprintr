import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';

export default class FormInputText extends Component {
	render() {
		return (
			<View style={style.container}>
				<Text style={style.label}>{this.props.label}</Text>
				<TextInput secureTextEntry={this.props.secure} style={style.textInput} />
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textInput: {
		width: 100,
		height: 40,
		fontSize: 25,
		borderWidth: 1,
		borderColor: 'lightgray'
	},
	label: {
		marginRight: 20
	}
});