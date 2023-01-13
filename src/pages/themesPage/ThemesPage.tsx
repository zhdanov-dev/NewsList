import styles from './ThemesPage.module.scss';
import Header from '../../components/header/Header';
import axios from 'axios';
import NavBar from '../../components/navbar/NavBar';
import Theme from '../../components/theme/Theme';
import { themeStore } from '../../store/ThemeStore';
import { observer } from 'mobx-react-lite';

function ThemesPage() {
	async function onClick(name: string) {
		await axios({
			method: 'get',
			url: `https://frontappapi.dock7.66bit.ru/api/theme/get?name=${name}`,
		})
			.then(response => {
				const theme = response.data;
				themeStore.changeTheme(
					theme.secondColor,
					theme.mainColor,
					theme.textColor
				);
			})
			.catch(error => {
				console.log(error.response.data.message);
			});
	}

	return (
		<div
			style={{
				backgroundColor: themeStore.theme.mainColor,
				color: themeStore.theme.fontColor,
			}}
			className={styles.container}
		>
			<Header title={'Темы'} />
			<div className={styles.themes__container}>
				<Theme
					mainColor={'rgb(25, 25, 25)'}
					secondColor={'rgb(111, 103, 120)'}
					fontColor={'rgb(209, 187, 46)'}
					title={'Тема 1'}
					name={'dark'}
					onClick={onClick}
				/>
				<Theme
					mainColor={'rgb(206, 240, 227)'}
					secondColor={'rgb(255, 255, 255)'}
					fontColor={'rgb(10, 10, 10)'}
					title={'Тема 2'}
					name={'light'}
					onClick={onClick}
				/>
				<Theme
					mainColor={'rgb(34, 22, 105)'}
					secondColor={'rgb(41, 67, 153)'}
					fontColor={'rgb(201, 201, 201)'}
					title={'Тема 3'}
					name={'blue'}
					onClick={onClick}
				/>
			</div>
			<NavBar />
		</div>
	);
}

export default observer(ThemesPage);
