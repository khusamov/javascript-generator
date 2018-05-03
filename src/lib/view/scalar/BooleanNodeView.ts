import NodeView from '../NodeView';
import BooleanNode from '../../node/scalar/BooleanNode';
import Node from '../../node/Node';

export default class BooleanNodeView extends NodeView {
	protected node: BooleanNode;
	constructor(node: Node) {
		super(node);
	}
}