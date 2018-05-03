import BooleanNode from '../../node/scalar/BooleanNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class BooleanCode extends Code {
	protected node: BooleanNode;
	constructor(node: Node) {
		super(node);
	}
}