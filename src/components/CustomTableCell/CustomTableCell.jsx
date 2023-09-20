import { CellInfoWrapper } from '../SharedComponents.styles';

export const CustomTableCell = ({ tableData }) => {
	const customStyles = {
		dateAndTime: {
			fontSize: 'var(--font-small)',
			color: 'var(--description-color)',
		},
		isFraudCheckPassed: {
			fontSize: 'var(--font-small)',
			color:
				tableData.isFraudCheckPassed === 'Passed fraud checks'
					? 'var(--description-color)'
					: 'var(--error-color)',
		},
		event: {
			fontWeight: 'bold',
		},
		price: {
			fontWeight: 'bold',
		},
		email: {
			fontWeight: 'bold',
		},
		status: {
			fontWeight: 'bold',
		},
	};

	return (
		<CellInfoWrapper>
			{Object.entries(tableData).map(([key, value]) => (
				<div key={key} style={customStyles[key]}>
					{value}
				</div>
			))}
		</CellInfoWrapper>
	);
};
