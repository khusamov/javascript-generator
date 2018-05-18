import * as _ from 'lodash';
import NodeFactory from '../NodeFactory';
import Node, { TDerivedNodeClass, isTDerivedNodeClass } from '../Node';
import VectorNode from '../VectorNode';

export interface IProperty {
	name: string;
	value: any | TDerivedNodeClass;
	comment?: string | undefined;
}

export function isIProperty(property: any): property is IProperty {
	return (
		_.isPlainObject(property)
		&& ('name' in property && _.isString(property.name))
		&& ('value' in property)
		&& (!('comment' in property) || _.isString(property.comment) || _.isUndefined(property.comment))
	);
}

export default class ObjectNode extends VectorNode<any> {

	static createNodeFromProperty(property: IProperty): Node {
		let result: Node;
		if (!isIProperty(property)) throw new Error(`Объект не соответствует TProperty.`);
		result = isTDerivedNodeClass(property.value)
			? new (property.value as TDerivedNodeClass)(property.name)
			: NodeFactory.createNode(property.name, property.value);
		if ('comment' in property && !!property.comment) result.comment = property.comment;
		return result;
	}

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
		this.items = [];
		this.add(value);
	}

	constructor(name: string, value: any = {}) {
		super(name, value);
		this.add(value);
	}

	/**
	 * Добавление одиночного свойства или присоединения всех свойств из объекта, поданного в valueOrName.
	 * Если name совпадет с имеющимся, то свойство будет перезаписано.
	 * Если первый аргумент строка, то второй аргумент является обязательным к заполнению.
	 * @param {string | any | Node} nameOrValueOrNode
	 * @param {string | any | TDerivedNodeClass} commentOrValueOrNodeClass
	 * @param {any | TDerivedNodeClass} valueOrNodeClass
	 * @returns {ObjectNode}
	 */
	add(
		nameOrValueOrNode: string | any | Node,
		commentOrValueOrNodeClass?: string | any | TDerivedNodeClass,
		valueOrNodeClass?: any | TDerivedNodeClass
	): this {

		let name: string, comment: string, value: any, NodeClass: TDerivedNodeClass;

		switch (arguments.length) {
			// Объект с добавляемыми узлами или один добавляемый узел (экземпляр класса Node).
			case 1: value = nameOrValueOrNode; break;
			// Первый аргумент: имя добавляемого свойства.
			// Второй аргумент: содержимое узла (value) или тип узла (ссылка на класс, производный от Node).
			case 2: name = nameOrValueOrNode as string; value = commentOrValueOrNodeClass; break;
			// Первый аргумент: имя добавляемого свойства.
			// Второй аргумент: комментарий.
			// Третий аргумент: содержимое узла (value) или тип узла (ссылка на класс, производный от Node).
			case 3: name = nameOrValueOrNode; comment = commentOrValueOrNodeClass; value = valueOrNodeClass; break;
		}

		if (_.isString(nameOrValueOrNode) && arguments.length === 1) {
			// Если первый аргумент строка, то второй аргумент является обязательным к заполнению.
			throw new Error(`Для узла '${nameOrValueOrNode}' не задан тип или значение.`);
		}

		((
			arguments.length === 1
				? value instanceof Node ? [value] : _.map(value || {}, (value, name: string) => ({name, value}))
				: [{name, value, comment}]
		) as (IProperty | Node)[]).forEach(this.addProperty.bind(this));
		return this;
	}

	get<T extends Node>(name: string): T {
		return this.items.find<T>((item): item is T => item.name === name);
	}

	/**
	 * Вспомогательный метод.
	 * Добавление свойства в объект.
	 * Если новое свойство по имени совпадет с имеющимся, то оно его перезапишет.
	 * @param {IProperty | Node} propertyOrNode
	 */
	private addProperty(propertyOrNode: IProperty | Node): this {
		// const node = (function createNode() {
		//
		// 	const node = (
		// 		property.value.prototype.constructor === Node.constructor
		// 			? new (property.value as TDerivedNodeClass)(property.name)
		// 			: (
		// 				property.value instanceof Node
		// 					? property.value
		// 					: NodeFactory.createNode(property.name, property.value)
		// 			)
		// 	);
		// 	// const node = (
		// 	// 	property.value instanceof Node
		// 	// 		? property.value
		// 	// 		: NodeFactory.createNode(property.name, property.value)
		// 	// );
		// 	if ('comment' in property && !!property.comment) node.comment = property.comment;
		// 	return node;
		// })();

		const node = this._createNode(propertyOrNode);

		const found = this.items.find(item => item.name === node.name);
		if (found) {
			this.items.splice(this.items.indexOf(found), 1, node);
		} else {
			this.items.push(node);
		}
		return this;
	}

	private _createNode(propertyOrNode: IProperty | Node): Node {
		return (
			propertyOrNode instanceof Node
				? propertyOrNode as Node
				: ObjectNode.createNodeFromProperty(propertyOrNode as IProperty)
		);
	}



}