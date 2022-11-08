import {SmileOutlined} from '@ant-design/icons';
import React from 'react';

import {Button, Result} from '@components';

const HomeContainer = ({
	handleClickButton,
}: {
	handleClickButton: () => void;
}) => (
	<Result
		icon={<SmileOutlined />}
		title="Boilerplate NextJs with AntDesign, Jest, Eslint, Prettier, and Pre-commit Husky"
		extra={
			<Button
				text="Go To Repository"
				type="primary"
				onClick={handleClickButton}
			/>
		}
	/>
);

export default HomeContainer;
