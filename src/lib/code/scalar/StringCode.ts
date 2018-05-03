import StringNode from '../../node/scalar/StringNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class StringCode extends Code {
	protected node: StringNode;
	constructor(node: Node) {
		super(node);
	}
}