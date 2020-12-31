import React from 'react';
import styled from 'styled-components';
import Pad from './Pad';

const renderPad = () => {
	const elements: JSX.Element[] = [];
	for (let i = 0; i < 7; i++) {
		elements.push(<Pad />);
	}

	return elements;
};

function Instrument() {
	return (
		<InstrumentStyled>
			<div className='type'></div>
			<div className='pads'>{renderPad()}</div>
			<div className='controls'>
				<div className='pitch'></div>
				<div className='volume'></div>
			</div>
		</InstrumentStyled>
	);
}

const InstrumentStyled = styled.div`
	display: flex;
	margin-bottom: 2rem;

	.pads {
		display: flex;
	}
`;

export default Instrument;
