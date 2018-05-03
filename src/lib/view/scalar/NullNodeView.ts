import NodeView from '../NodeView';
import NullNode from '../../node/scalar/NullNode';
import Node from '../../node/Node';

export default class NullNodeView extends NodeView {
	protected node: NullNode;
	constructor(node: Node) {
		super(node);
	}
}