import NodeView from '../NodeView';
import FunctionNode from '../../node/scalar/FunctionNode';
import Node from '../../node/Node';

export default class FunctionNodeView extends NodeView {
	protected node: FunctionNode;
	constructor(node: Node) {
		super(node);
	}
	toString(): string {
		return this.node.value.toString().replace(
			this.node.isMethodFunction
				? /.*?\(/
				: 'function (', 'function('
		);
	}
}