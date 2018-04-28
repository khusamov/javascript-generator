import ArrayNode from '../../node/vector/ArrayNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class ArrayCode extends Code {
	protected node: ArrayNode;
	constructor(node: Node) {
		super(node);
	}
}