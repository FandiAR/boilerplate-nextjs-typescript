import {Typography as AntdTypography} from 'antd';
import {CSSProperties} from 'react';

const {Text, Title} = AntdTypography;

const Typography = ({
	title,
	style,
	text,
}: {
	title?: boolean;
	style?: CSSProperties;
	text: string;
}) => {
	if (title) return <Title style={style}>{text}</Title>;
	return <Text style={style}>{text}</Text>;
};
export default Typography;
