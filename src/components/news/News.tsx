import { themeStore } from '../../store/ThemeStore';
import styles from './News.module.scss';

interface NewsProps {
	title: string;
	content: string;
}

function News({title, content}: NewsProps) {
	return (
		<div style={{borderColor: themeStore.theme.secondColor}} className={styles.container}>
			<div className={styles.title}>{title}</div>
			<div className={styles.content}>
				{content}
			</div>
		</div>
	);
}

export default News;
