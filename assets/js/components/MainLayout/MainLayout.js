import React from 'react'
import { Component, PropTypes } from 'react'
import Header from '../Header'
import MessageBox from '../MessageBox'
export default class MainLayout extends Component {
	constructor(props) {
		super(props)
		// this.state = {
		// 	username: ''
		// }
		// this.setUser = this.setUser.bind(this)
	}

	// setUser(username) {
	// 	this.setState({
	// 		username: username
	// 	})
	// 	this.refs.header.setState({
	// 		user: { username: username }
	// 	})
	// }

	render() {
		// const childrenWithProps = React.Children.map(this.props.children,
		// 	(child) => React.cloneElement(child, {
		// 		setUser: this.setUser
		// 	}));
		return (
			<div className="container">
				<Header />
				<MessageBox />
				{this.props.children}
			</div>
		)
	}
}

MainLayout.propTypos = {
	children: PropTypes.element.isRequired
}