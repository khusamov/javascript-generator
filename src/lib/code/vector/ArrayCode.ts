import Node from '../../node/Node';
import ArrayNode from '../../node/vector/ArrayNode';
import Code from '../Code';

export default class ArrayCode<T extends Node = ArrayNode> extends Code<T> {
	constructor(node: T) {
		super(node);
	}
}