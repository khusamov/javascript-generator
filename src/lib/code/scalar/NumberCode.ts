import NumberNode from '../../node/scalar/NumberNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class NumberCode extends Code {
	protected node: NumberNode;
	constructor(node: Node) {
		super(node);
	}
}