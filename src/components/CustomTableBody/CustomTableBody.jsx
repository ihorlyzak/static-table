import { TableBody, TableCell, TableRow } from '@mui/material';

import { CustomTableCell } from '../CustomTableCell';

export const CustomTableBody = ({ staticTable }) => {
	return (
		<TableBody>
			{staticTable.data.map((row, index) => (
				<TableRow key={index}>
					{staticTable.columns.map(column => (
						<TableCell key={column}>
							<CustomTableCell
								tableData={row[column]}
								column={column}
							/>
						</TableCell>
					))}
				</TableRow>
			))}
		</TableBody>
	);
};
