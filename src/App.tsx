import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';

import Main from './components/Main';
import Nav from './components/Nav';
import { COLORS } from './styles/variables';

function App() {
	return (
		<AppDiv>
			<GlobalStyle />
			<Nav />
			<Main />
		</AppDiv>
	);
}

const AppDiv = styled.div``;

export default App;
