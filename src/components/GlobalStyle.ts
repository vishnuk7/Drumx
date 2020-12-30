import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../styles/variables';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after
    {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background-color: ${COLORS.BGCOLOR};
        color: ${COLORS.WHITE};
    }
`;

export default GlobalStyle;
