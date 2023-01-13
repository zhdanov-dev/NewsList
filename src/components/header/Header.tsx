import { observer } from 'mobx-react-lite';
import { themeStore } from '../../store/ThemeStore';
import styles from './Header.module.scss';

interface HeaderProps {
	title: string;
	onClick?: () => void;
}

function Header({ title, onClick }: HeaderProps) {
	return (
		<header
			style={{
				backgroundColor: themeStore.theme.secondColor,
				color: themeStore.theme.fontColor,
			}}
			className={styles.container}
		>
			<div className={styles.content}>{title}</div>
			{title === 'Новости' ? (
				<span onClick={onClick} className='material-symbols-outlined'>
					refresh
				</span>
			) : null}
		</header>
	);
}

export default observer(Header);
