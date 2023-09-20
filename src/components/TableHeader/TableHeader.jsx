import { TableCell, TableHead, TableRow } from '@mui/material';

import { HighlitedInfo } from '../SharedComponents.styles';

import { HeadingCell, TableTitle } from './TableHeader.styles';

export const TableHeader = ({ title, columns }) => {
	return (
		<TableHead>
			<TableRow>
				<HeadingCell>
					<TableTitle>{title}</TableTitle>
				</HeadingCell>
			</TableRow>

			<TableRow>
				{columns.map(column => (
					<TableCell key={column}>
						<HighlitedInfo>{column}</HighlitedInfo>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};
