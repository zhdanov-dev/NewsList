import styles from './NewsPage.module.scss';
import Header from '../../components/header/Header';
import News from '../../components/news/News';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar/NavBar';
import { themeStore } from '../../store/ThemeStore';
import { observer } from 'mobx-react-lite';

function NewsPage() {
	const [news, setNews] = useState<News[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	const [startPoint, setStartPoint] = useState(0);
	const [pullChange, setPullChange] = useState(0);

	useEffect(() => {
		window.addEventListener('touchstart', pullStart);
		window.addEventListener('touchmove', pull);
		window.addEventListener('touchend', endPull);
		return () => {
			window.removeEventListener('touchstart', pullStart);
			window.removeEventListener('touchmove', pull);
			window.removeEventListener('touchend', endPull);
		};
	});

	function pullStart(e: any) {
		const { screenY } = e.targetTouches[0];
		setStartPoint(screenY);
	}

	function pull(e: any) {
		const touch = e.targetTouches[0];
		const { screenY } = touch;
		let pullLength = startPoint < screenY ? Math.abs(screenY - startPoint) : 0;
		setPullChange(pullLength);
	}

	function endPull() {
		setStartPoint(0);
		setPullChange(0);
		if (pullChange > 220) initLoading();
	}

	function initLoading() {
		setTimeout(() => {
			setLoading(true);
		}, 1000);
	}

	useEffect(() => {
		async function getNews() {
			await axios({
				method: 'get',
				url: `https://frontappapi.dock7.66bit.ru/api/news/get?page=${page}&count=15`,
			})
				.then(response => {
					setPage(prev => (prev += 1));
					setNews([...news, ...response.data]);
					console.log(response)
				})
				.catch(error => {
					console.log(error.response.data.message);
				})
				.finally(() => setLoading(false));
		}
		if (loading) getNews();
	}, [loading]);

	useEffect(() => {
		document.addEventListener('scroll', scrollFunction);
		return function () {
			document.removeEventListener('scroll', scrollFunction);
		};
	}, []);

	function scrollFunction(e: any) {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			setLoading(true);
		}
	}

	return (
		<div
			style={{
				backgroundColor: themeStore.theme.mainColor,
				color: themeStore.theme.fontColor,
			}}
			className={styles.container}
		>
			<Header onClick={initLoading} title={'Новости'} />
			<div className={styles.news__container}>
				{news.map((news: News, key: number) => {
					return <News title={news.title} content={news.content} key={key} />;
				})}
			</div>
			<NavBar />
		</div>
	);
}

export default observer(NewsPage);
