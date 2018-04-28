import * as _ from 'lodash';
import NodeFactory from '../NodeFactory';
import Node from '../Node';
import VectorNode from '../VectorNode';

export default class ArrayNode extends VectorNode {

	/**
	 * Флаг, указывающий, являются ли элементы массива уникальными или нет.
	 * Если unique = true, то при добавлении элементов производится
	 * операция удаления повторяющихся элементов массива.
	 * @type {boolean}
	 */
	unique: boolean = true;

	protected brackets = '[]';
	protected codeDivider = '';

	get value() {
		const value: any[] = Array.from(this.items.map(item => item.value));
		value['$$items'] = this.items;
		return value;
	}

	set value(value: any) {
		super.value = value;
	}

	constructor(...value: any[])
	constructor(value?: any | any[]) {
		super(value);
		this.add.apply(this, arguments);
	}

	add(...value: any[]): this
	add(value: any | any[]): this {
		value = arguments.length > 1 ? Array.from(arguments) : value;
		value = _.isArray(value) ? value : [value];
		const items = value.map(NodeFactory.createNode.bind(NodeFactory));
		this.items = this.items.concat(items);
		this.uniq();
		return this;
	}

	private uniq(): void {
		if (this.unique) this.items = _.uniq<Node>(this.items);
	}

}