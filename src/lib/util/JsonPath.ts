import * as JsonPathLib from 'jsonpath';

/**
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
	down<T>(pathExpression: string): T {
		return this.query(pathExpression)[0];
	}
	up(pathExpression: string, ancestorPathExpression: string) {}
	parent(pathExpression: string): any {
		return JsonPathLib.parent(this.root, pathExpression);
	}
}