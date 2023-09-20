import { Typography, styled } from '@mui/material';

export const CellInfoWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: '5px',
});

export const HighlitedInfo = styled(Typography)({
	fontWeight: 'bold',
});
