import NodeView from '../NodeView';
import StringNode from '../../node/scalar/StringNode';
import Node from '../../node/Node';

export default class StringNodeView extends NodeView {
	protected node: StringNode;
	constructor(node: Node) {
		super(node);
	}
	toString(): string {
		return this.node.isMultiLine ? `\`${this.node.value}\`` : `'${this.node.value}'`;
	}
}