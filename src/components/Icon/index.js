import React from 'react';
import { ICON_SIZE } from '../../styles/constants';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({ active, name, color }) => {
	return (
		<MCIcon
			name={name}
			size={ICON_SIZE}
			color={active ? color : '#1C1C1C'}
		/>
	);
};

export default Icon;