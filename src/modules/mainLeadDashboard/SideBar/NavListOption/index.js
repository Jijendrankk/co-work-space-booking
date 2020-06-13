/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './index.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import { navOptions, mobileNavOptions } from '../../../../shared/utils';
class NavListOption extends Component {
	state = {
		navOptions: window.innerWidth < 951 ? mobileNavOptions : navOptions,
		selectedNavItem: [],
		highLightNavItem: 'Dashboard Home'
	};
	handleNavState = subLevelObj => () => {
		let navitem = [];
		if (this.state.selectedNavItem.includes(subLevelObj.label)) {
			navitem = [];
		} else if (subLevelObj.parentNav && !subLevelObj.children) {
			navitem[0] = subLevelObj.parentNav;
		} else if (subLevelObj.parentNav && subLevelObj.children) {
			navitem.push(subLevelObj.parentNav, subLevelObj.label);
		} else {
			navitem[0] = subLevelObj.label;
		}
		this.setState({ selectedNavItem: navitem, highLightNavItem: subLevelObj.label });
	};
	handleNavList = children => {
		return (
			children.length !== 0 &&
			children.map((child, index) => {
				if (!child.children) {
					return (
						<div
							className={
								this.state.highLightNavItem === child.label
									? 'nav-main-container highlight'
									: 'nav-main-container'
							}
							onClick={this.handleNavState(child)}
						>
							{child.imgUrl === '' ? (
								//<img src={child.imgUrl} className='nav-img' />
								<HomeIcon className='nav-img' />
							) : (
								<div style={{ width: '22px' }} />
							)}
							<div className='nav-main-label'>{child.label}</div>
						</div>
					);
				}
				return (
					<>
						<div
							className={
								this.state.highLightNavItem === child.label
									? 'nav-main-container-with-child highlight'
									: 'nav-main-container-with-child'
							}
							onClick={this.handleNavState(child)}
						>
							<div className='nav-main-block'>
								{child.imgUrl === '' ? (
									//<img src={child.imgUrl} className='nav-img' />
									<ExtensionIcon className='nav-img' />
								) : (
									<div style={{ width: '22px' }} />
								)}
								<div className='nav-main-label'>{child.label}</div>
							</div>
							{this.state.selectedNavItem.length !== 0 &&
							this.state.selectedNavItem.includes(child.label) ? (
								<ExpandMoreIcon className='nav-expand' />
							) : (
								<NavigateNextIcon className='nav-expand' />
							)}
						</div>
						<div
							className={
								this.state.selectedNavItem.length !== 0 &&
								this.state.selectedNavItem.includes(child.label)
									? 'nav-open'
									: 'nav-open nav-close'
							}
						>
							{this.handleNavList(child.children)}
						</div>
					</>
				);
			})
		);
	};

	render() {
		return <div className='nav-list-container'>{this.handleNavList(this.state.navOptions)}</div>;
	}
}

export default NavListOption;
