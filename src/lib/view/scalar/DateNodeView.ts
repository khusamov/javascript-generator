import NodeView from '../NodeView';
import DateNode from '../../node/scalar/DateNode';
import Node from '../../node/Node';

export default class DateNodeView extends NodeView {
	protected node: DateNode;
	constructor(node: Node) {
		super(node);
	}
	toString(): string {
		return `new Date('${this.node.value.toUTCString()}')`;
	}
}