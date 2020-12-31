import React from 'react';
import styled from 'styled-components';
import Instrument from './Instrument';
import Lights from './Lights';

const renderInstrumentRow = () => {
	const elements: JSX.Element[] = [];
	for (let i = 0; i < 5; i++) {
		elements.push(<Instrument />);
	}

	return elements;
};

const renderLights = () => {
	const elements: JSX.Element[] = [];
	for (let i = 0; i < 7; i++) {
		elements.push(<Lights />);
	}

	return elements;
};

function Instruments() {
	return (
		<InstrumentsStyled>
			<div className='lights'>{renderLights()}</div>
			{renderInstrumentRow()}
		</InstrumentsStyled>
	);
}

const InstrumentsStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.lights {
		margin-bottom: 1rem;
		display: flex;
	}
`;

export default Instruments;
