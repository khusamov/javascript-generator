import RegExpNode from '../../node/scalar/RegExpNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class RegExpCode extends Code {
	protected node: RegExpNode;
	constructor(node: Node) {
		super(node);
	}
}