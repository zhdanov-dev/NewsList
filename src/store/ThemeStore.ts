import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class themeDataStore {
	theme = this.resetTheme();

	resetTheme() {
		return {
			mainColor: 'rgb(255, 255, 255)',
			secondColor: 'rgb(206, 240, 227)',
			fontColor: 'rgb(10, 10, 10)',
		};
	}

	constructor() {
		makeAutoObservable(this);
		makePersistable(this, {
			name: 'themeDataStore',
			properties: ['theme'],
			storage: sessionStorage,
		});
	}

	changeTheme(mainColor: string, secondColor: string, fontColor: string) {
		this.theme.mainColor = mainColor;
		this.theme.secondColor = secondColor;
		this.theme.fontColor = fontColor;
	}
}

export const themeStore = new themeDataStore();
