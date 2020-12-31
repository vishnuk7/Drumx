import React from 'react';
import styled from 'styled-components';
import { COLORS, SHADOW } from '../styles/variables';

function Pad() {
	return <PadStyled />;
}

const PadStyled = styled.div`
	background: ${COLORS.WHITE};
	width: 6.375rem;
	height: 6.375rem;
	border-radius: 5px;
	margin-left: 1rem;
	box-shadow: ${SHADOW.BOX_SHADOW};
`;

export default Pad;
