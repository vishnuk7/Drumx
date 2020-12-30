import React from 'react';
import styled from 'styled-components';

import { COLORS, SHADOW } from '../styles/variables';

function Main() {
	return (
		<MainStyled>
			<h5>Hello</h5>
		</MainStyled>
	);
}

const MainStyled = styled.div`
	background: ${COLORS.BLACK};
	display: flex;
	height: 90vh;
	/* width: 90vw; */
	justify-content: center;
	margin-left: 1rem;
	margin-right: 1rem;
	box-shadow: ${SHADOW.BOX_SHADOW};
`;

export default Main;
