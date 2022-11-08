import {Button as AntdButton, ButtonProps} from 'antd';

import {Typography} from '@components';
import {COLORS} from '@constants/colors';

type CustomButtonProps = {
	text: string;
	onClick: () => void;
	className?: string;
	type?: 'default' | 'primary';
} & ButtonProps;

const Button = (props: CustomButtonProps) => {
	const {text, onClick, className, type} = props;
	return (
		<AntdButton
			{...props}
			className={className}
			style={{...props.style, border: 0, borderRadius: 4}}
			onClick={onClick}
			type={type}
		>
			<Typography
				text={text}
				style={type !== 'primary' ? {} : {color: COLORS.white}}
			/>
		</AntdButton>
	);
};
export default Button;
