import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { themeStore } from '../../store/ThemeStore';
import styles from './NavBar.module.scss';

function NavBar() {
	return (
		<div
			style={{
				backgroundColor: themeStore.theme.secondColor,
				color: themeStore.theme.fontColor,
			}}
			className={styles.container}
		>
			<div className={styles.content}>
				<NavLink
					style={props =>
						props.isActive
							? {
									color: themeStore.theme.fontColor,
							  }
							: {
									color: themeStore.theme.mainColor,
							  }
					}
					to='/news'
				>
					<span
						className='material-symbols-outlined'
					>
						feed
					</span>
				</NavLink>
				<NavLink
					to='/themes'
					style={props =>
						props.isActive
							? {
									color: themeStore.theme.fontColor,
							  }
							: {
									color: themeStore.theme.mainColor,
							  }
					}
				>
					<span
						style={{ fontSize: '48px' }}
						className='material-symbols-outlined'
					>
						palette
					</span>
				</NavLink>
			</div>
		</div>
	);
}

export default observer(NavBar);
