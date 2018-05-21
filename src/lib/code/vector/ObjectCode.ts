import Node from '../../node/Node';
import ObjectNode from '../../node/vector/ObjectNode';
import Code from '../Code';

export default class ObjectCode<T extends Node = ObjectNode> extends Code<T> {
	constructor(node: T) {
		super(node);
	}
}