import * as _ from 'lodash';
import NodeFactory from '../NodeFactory';
import Node from '../Node';
import VectorNode from '../VectorNode';

type TProperty = {
	name: string,
	value: any,
	comment: string
};

export default class ObjectNode extends VectorNode {

	protected brackets = '{}';

	get value(): any {
		const value = this.items.reduce<any>((result, item): any => {
			return Object.assign(result, {[item.name]: item.value});
		}, {});
		value['$$items'] = this.items;
		return value;
	}

	set value(value: any) {
		super.value = value;
	}

	constructor(name: string, value: any = {}) {
		super(name, value);
		this.add(value);
	}

	/**
	 * Добавление одиночного свойства или присоединения всех свойств из объекта, поданного в valueOrName.
	 * Если name совпадет с имеющимся, то свойство будет перезаписано.
	 * @param {string | any} nameOrValue
	 * @param {string | any} commentOrValue
	 * @param {any} value
	 * @returns {ObjectNode}
	 */
	add(nameOrValue: string | any, commentOrValue?: string | any, value?: any): this {
		let name: string, comment: string;
		switch (arguments.length) {
			case 1: value = nameOrValue; break;
			case 2: name = nameOrValue; value = commentOrValue; break;
			case 3: name = nameOrValue; comment = commentOrValue; break;
		}
		((
			arguments.length === 1
				? _.map(value || {}, (value, name: string) => ({name, value}))
				: [{name, value, comment}]
		) as TProperty[]).forEach(this.addProperty.bind(this));
		return this;
	}

	get<T extends Node>(name: string): T {
		return this.items.find<T>((item): item is T => item.name === name);
	}

	private addProperty(property: TProperty) {
		const node = (function createType() {
			const node = (
				property.value instanceof Node
					? property.value
					: NodeFactory.createNode(property.name, property.value)
			);
			if ('comment' in property && !!property.comment) node.comment = property.comment;
			return node;
		})();
		const found = this.items.find(item => item.name === node.name);
		if (found) {
			this.items.splice(this.items.indexOf(found), 1, node);
		} else {
			this.items.push(node);
		}
	}

}