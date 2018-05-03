import NodeView from '../NodeView';
import NumberNode from '../../node/scalar/NumberNode';
import Node from '../../node/Node';

export default class NumberNodeView extends NodeView {
	protected node: NumberNode;
	constructor(node: Node) {
		super(node);
	}
	toString(): string {
		if (this.node.value instanceof Number) {
			return `new Number(${String(this.node.value).valueOf()})`;
		} else {
			return String(this.node.value).valueOf();
		}
	}
}