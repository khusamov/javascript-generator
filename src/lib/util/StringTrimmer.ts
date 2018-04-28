export default class StringTrimmer {
	/**
	 * Сокращение и сжатие многострочных строк.
	 * Функция шаблонизации (https://learn.javascript.ru/es-string).
	 * @param {TemplateStringsArray} strings
	 * @param {string} vars
	 * @returns {string}
	 */
	static trim(strings: TemplateStringsArray, ...vars: string[]): string {
		return strings.map((s, i) => s.trim() + (i === vars.length ? '' : vars[i])).join('');
	}
}