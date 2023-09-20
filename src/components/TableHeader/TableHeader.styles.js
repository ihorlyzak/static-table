import { TableCell, styled } from '@mui/material';

import { HighlitedInfo } from '../SharedComponents.styles';

export const TableTitle = styled(HighlitedInfo)({
	fontSize: 'var(--font-large)',
});

export const HeadingCell = styled(TableCell)({
	border: 'none',
});
