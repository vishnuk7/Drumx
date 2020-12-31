import React from 'react';
import styled from 'styled-components';

function Lights() {
	return (
		<LightsStyled>
			<div className='round-blub'></div>
		</LightsStyled>
	);
}

const LightsStyled = styled.div`
	width: 6.375rem;
	display: flex;
	justify-content: center;
	margin-left: 1rem;

	.round-blub {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		background-color: rgba(201, 147, 72, 0.52);
		/* lights-up */
		/* background: #ba853f;
		box-shadow: 0px 1px 20px #ffa329; */
	}
`;

export default Lights;
