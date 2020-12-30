import React from 'react';
import styled from 'styled-components';

//import svg
import logo from '../img/logo.svg';
import download from '../img/download.svg';
import play from '../img/play.svg';
import { COLORS } from '../styles/variables';

function Nav() {
	return (
		<NavStyled>
			<div className='logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='controlls'>
				<div className='item'>
					<img src={download} alt='downlaod' />
				</div>
				<div className='item'>
					<img src={play} alt='play' />
				</div>
				<div className='item'></div>
				<div className='item'>
					<input type='text' value='150 BPM'></input>
				</div>
			</div>
		</NavStyled>
	);
}

const NavStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 1rem;

	.controlls {
		display: flex;
		align-items: center;

		.item {
			padding-left: 1rem;

			input {
				background: ${COLORS.PRIMARY};
				border: 0;
				outline: none;
				height: 48px;
				width: 222px;
				text-align: center;
				color: ${COLORS.BLACK};
			}
		}
	}
`;

export default Nav;
