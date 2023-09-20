import { Table } from '@mui/material';

import { CustomTableBody, TableHeader } from '../components';

import staticTable from '../static/staticTable.json';

import { TableWrapper } from './TablePage.styles';

export const TablePage = () => {
	return (
		<TableWrapper>
			<Table>
				<TableHeader
					title={staticTable.tableTitle}
					columns={staticTable.columns}
				/>

				<CustomTableBody staticTable={staticTable} />
			</Table>
		</TableWrapper>
	);
};
