import NodeView from '../NodeView';
import UndefinedNode from '../../node/scalar/UndefinedNode';
import Node from '../../node/Node';

export default class UndefinedNodeView extends NodeView {
	protected node: UndefinedNode;
	constructor(node: Node) {
		super(node);
	}
}