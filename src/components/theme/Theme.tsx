import styles from './Theme.module.scss';

interface ThemeProps {
	name: string;
	title: string;
	mainColor: string;
	secondColor: string;
	fontColor: string;
	onClick: (name: string) => void;
}

function Header({ name, title, mainColor, secondColor, fontColor, onClick }: ThemeProps) {
	return (
		<button
			style={{
				backgroundColor: secondColor,
				borderColor: mainColor,
				color: fontColor,
			}}
			className={styles.button}
			onClick={() => {onClick(name)}}
		>
			{title}
		</button>
	);
}

export default Header;
