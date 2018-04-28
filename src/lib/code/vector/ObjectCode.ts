import ObjectNode from '../../node/vector/ObjectNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class ObjectCode extends Code {
	protected node: ObjectNode;
	constructor(node: Node) {
		super(node);
	}
}