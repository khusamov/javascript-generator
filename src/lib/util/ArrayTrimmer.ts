export default class ArrayTrimmer {
	static isEmptyString: Function = (str: string): boolean => !(str).trim();
	static trimLeft(arr: string[]): string[] {
		let result;
		arr.forEach((item, index) => {
			if (!result && !this.isEmptyString(item)) result = arr.slice(index);
		});
		return result || [];
	}
	static trimRight(arr: string[]): string[] {
		let result;
		for (let index = arr.length - 1; index >= 0; index--) {
			if (!result && !this.isEmptyString(arr[index])) result = arr.slice(0, index + 1);
		}
		return result || [];
	}

	/**
	 * Сокращение строковых массивов. Удаляются пустые строки в массиве.
	 * Пустые строки посередине значимых не будут затронуты.
	 * @param {string[]} arr
	 * @returns {string[]}
	 */
	static trim(arr: string[]): string[] {
		return this.trimLeft(this.trimRight(arr));
	}
}