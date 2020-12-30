import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/variables';

function Pad() {
	return <PadStyled />;
}

const PadStyled = styled.div`
	background: ${COLORS.WHITE};
	width: 6.375rem;
	height: 6.375rem;
`;

export default Pad;
