import ExpressionNode from '../../node/scalar/ExpressionNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class ExpressionCode extends Code {
	protected node: ExpressionNode;
	constructor(node: Node) {
		super(node);
	}
}