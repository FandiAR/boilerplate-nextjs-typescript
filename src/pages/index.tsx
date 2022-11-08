import dynamic from 'next/dynamic';

const Head = dynamic(() => import('next/head'));
const HomeContainer = dynamic(() => import('@containers/HomeContainer'));

const HomePage = () => {
	const githubUrl = 'https://github.com/FandiAR/boilerplate-nextjs-typescript';

	const handleClickButton = () => window.open(githubUrl, '_ blank');

	return (
		<>
			<Head>
				<title>Home | Boilerplate NextJs AntDesign</title>
			</Head>
			<HomeContainer handleClickButton={handleClickButton} />
		</>
	);
};
export default HomePage;
