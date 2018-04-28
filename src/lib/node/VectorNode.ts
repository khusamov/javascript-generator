import * as _ from 'lodash';
import JsonPath from '../util/JsonPath';
import Node from './Node';

export type TFilterFunction<T extends Node> = (this: void, item: T, index: number, items: T[]) => item is T;

export default abstract class VectorNode extends Node {

	protected divider: string = ', ';
	protected brackets: string;
	protected codeDivider: string;
	public items: Node[] = [];

	/**
	 * Так как jsonPath постоянно вычисляется, то перед работой желательно
	 * его сохранить в отдельную переменную, например:
	 * const jsonPath = this.jsonPath;
	 * Внимание, jsonPath при каждом обращении к нему постоянно вычисляется, потому что
	 * он зависит от this.value, значение которой тоже постоянно вычисляется и меняется.
	 * @returns {JsonPath}
	 */
	get jsonPath(): JsonPath {
		return new JsonPath(this.value);
	}

	set value(value: any) {
		this._value = value;
		this.items = [];
		this.add(value);
	}

	add(value: any): this {
		return this;
	}

	down<T extends Node>(pathExpression: string): T {

		// Значение this.jsonPath вычисляется при каждом обращении, поэтому сохраняем его в константу.
		// Иначе по parent.indexOf(node) далее невозможно будет вычислить номер элемента массива.
		const jsonPath = this.jsonPath;

		const node = jsonPath.down(pathExpression);
		if (!node) throw new Error(`Не найден узел '${pathExpression}'.`);

		const parent = jsonPath.parent(pathExpression);
		const items = parent['$$items'] as Node[];

		let type;
		if (_.isArray(parent)) {
			type = items[parent.indexOf(node)];
		} else {
			const name = _.findKey(parent, n => n === node);
			type = items.find(item => item.name === name);
		}

		return type;
	}

	makeComment(pathExpression: string, comment: string): this {
		this.down(pathExpression).comment = comment;
		return this;
	}

	find<T extends Node>(jsonPathExpressionOrFilterFn: string | TFilterFunction<T>): T {
		let result: T;
		if (_.isString(jsonPathExpressionOrFilterFn)) {
			result = this.down<T>(jsonPathExpressionOrFilterFn);
		} else {
			const filterFn = jsonPathExpressionOrFilterFn as TFilterFunction<T>;
			result = this.items.find<T>(jsonPathExpressionOrFilterFn);
		}
		return result;
	}

	has(jsonPathExpressionOrFilterFn: string | TFilterFunction<Node>): boolean {
		return !!this.find(jsonPathExpressionOrFilterFn);
	}

	remove(removable: Node): this {
		_.remove(this.items, item => item === removable);
		return this;
	}

}