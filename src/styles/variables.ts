//type defincation
type color = {
	PRIMARY: string;
	SECONDARY: string;
	WHITE: string;
	BLACK: string;
	BGCOLOR: string;
};

type shadow = {
	BOX_SHADOW: string;
};

export const COLORS: color = {
	PRIMARY: '#C5A880',
	SECONDARY: '#532E1C',
	WHITE: '#E6E6E6',
	BLACK: '#0F0F0F',
	BGCOLOR: '#232020',
};

export const SHADOW: shadow = {
	BOX_SHADOW: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);',
};
