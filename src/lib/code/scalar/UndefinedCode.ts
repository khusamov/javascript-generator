import UndefinedNode from '../../node/scalar/UndefinedNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class UndefinedCode extends Code {
	protected node: UndefinedNode;
	constructor(node: Node) {
		super(node);
	}
}