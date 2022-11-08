import type {AppProps} from 'next/app';
import 'antd/dist/antd.css';
import Head from 'next/head';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vW;
    height: 100vH;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    overflow-x: hidden;
    background: white;
  }
`;

const BoilerplateNextJs = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Boilerplate NextJs</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};
export default BoilerplateNextJs;
