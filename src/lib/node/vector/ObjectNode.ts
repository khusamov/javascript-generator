import * as _ from 'lodash';
import NodeFactory from '../NodeFactory';
import Node from '../Node';
import VectorNode from '../VectorNode';

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

	constructor(value?: any) {
		super(value);
		this.add.apply(this, arguments);
	}

	/**
	 * Добавление одиночного свойства или присоединения всех свойств из объекта, поданного в valueOrName.
	 * Если name совпадет с имеющимся, то свойство будет перезаписано.
	 * @param {string | any} nameOrValue
	 * @param {any} value
	 * @param {string} comment
	 * @returns {ObjectNode}
	 */
	add(nameOrValue: string | any, value?: any, comment?: string): this {
		((
			arguments.length > 1
				? [{name: nameOrValue as string, value, comment}]
				: _.map(nameOrValue || {}, (value, name: string) => ({name, value}))
		) as {
			name: string,
			value: any,
			comment: string
		}[]).forEach(property => {
			const node = (function createType() {
				const node = (
					property.value instanceof Node
						? property.value
						: NodeFactory.createNode(property.value)
				);
				node.name = property.name;
				if ('comment' in property && !!property.comment) node.comment = property.comment;
				return node;
			})();
			const found = this.items.find(item => item.name === node.name);
			if (found) {
				this.items.splice(this.items.indexOf(found), 1, node);
			} else {
				this.items.push(node);
			}
		});
		return this;
	}

	get<T extends Node>(name: string): T {
		return this.items.find<T>((item): item is T => item.name === name);
	}

}