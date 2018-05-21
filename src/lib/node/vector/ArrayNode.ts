import * as _ from 'lodash';
import NodeFactory from '../NodeFactory';
import Node from '../Node';
import VectorNode from '../VectorNode';

export default class ArrayNode extends VectorNode<any[]> {

	/**
	 * Флаг, указывающий, являются ли элементы массива уникальными или нет.
	 * Если unique = true, то при добавлении элементов производится
	 * операция удаления повторяющихся элементов массива.
	 * @type {boolean}
	 */
	unique: boolean = false;

	protected brackets = '[]';
	protected codeDivider = '';

	get value(): any[] {
		const value: any[] = Array.from(this.items.map(item => item.value));
		value[VectorNode.nodeItemsSymbol] = this.items;
		return value;
	}

	set value(value: any[]) {
		super.value = value;
		this.items = [];
		this.add.apply(this, value);
	}

	constructor(name: string, value: any = []) {
		super(name, value);
		this.add.apply(this, value);
	}

	/**
	 * Добавление узлов в массив.
	 * Можно добавлять несколько узлов (если указываются несколько аргументов).
	 * Можно добавлять как узел (типа Node) или значение узла.
	 * По умолчанию имена узлов равны undefined.
	 * @param {(any | Node)[]} ...added
	 * @param {any | Node} added
	 * @returns {ArrayNode}
	 */
	add(...added: (any | Node)[]): this
	add(added: any | Node): this {
		if (arguments.length) {
			this.items = this.items.concat(
				(
					arguments.length > 1
						? Array.from(arguments)
						: [added]
				)
					.map(
						(addedItem, index) => addedItem instanceof Node
							? addedItem
							: NodeFactory.createNode(undefined, addedItem)
					)
			);
			this.uniq();
		}
		return this;
	}

	private uniq(): void {
		if (this.unique) this.items = _.uniqBy<Node>(this.items, 'value');
	}

}