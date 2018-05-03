import NodeView from '../NodeView';
import ExpressionNode from '../../node/scalar/ExpressionNode';
import Node from '../../node/Node';

export default class ExpressionNodeView extends NodeView {
	protected node: ExpressionNode;
	constructor(node: Node) {
		super(node);
	}
}