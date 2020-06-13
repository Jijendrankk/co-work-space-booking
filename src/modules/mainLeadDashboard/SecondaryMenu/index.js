/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './index.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
class SecondaryMenu extends Component {
	render() {
		return (
			<div className='secondary-menu-container'>
				<div className='secondary-menu-label'>Home</div>
				<div className='secondary-menu-label'>About</div>
				<div className='secondary-menu-label'>Options</div>
				<div className='secondary-menu-label'>Products</div>
				<div className='menu-dropdown'>
					<div className='secondary-menu-label'>Menu</div>
					<NavigateNextIcon className='menu-dropdown-arrow' />
				</div>
			</div>
		);
	}
}

export default SecondaryMenu;
