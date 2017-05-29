import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Title extends Component {
	render() {
		return (
			<Text style={style.title}>{this.props.title}</Text>
		);
	}
}

const style = StyleSheet.create({
	title: {
		fontSize: 50
	}
});

//AppRegistry.registerComponent('Title', () => Title);