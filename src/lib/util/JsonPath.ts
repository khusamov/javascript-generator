import * as JsonPathLib from 'jsonpath';

/**
 * Декоратор для библиотеки jsonpath.
 * http://jsonpath.com/
 * https://www.npmjs.com/package/jsonpath
 */
export default class JsonPath {
	constructor(private root: any) {}
	query(pathExpression: string): any[] {
		return JsonPathLib.query(this.root, pathExpression);
	}
	pointer(pathExpression: string): string {
		return JsonPathLib.stringify(JsonPathLib.paths(this.root, pathExpression)[0]);
	}

	/**
	 * Внимание, в случае, если значение узла === undefined, то результат данного метода невозможно
	 * правильно интерпретировать: либо не найден узел, либо найден узел undefined.
	 * @param {string} pathExpression
	 * @returns {T | undefined}
	 */
	down<T>(pathExpression: string): T | undefined {
		return this.query(pathExpression)[0];
	}

	up(pathExpression: string, ancestorPathExpression: string) {
		// TODO
	}
	parent(pathExpression: string): any {
		return JsonPathLib.parent(this.root, pathExpression);
	}
}