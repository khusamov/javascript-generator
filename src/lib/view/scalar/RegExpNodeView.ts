import NodeView from '../NodeView';
import RegExpNode from '../../node/scalar/RegExpNode';
import Node from '../../node/Node';

export default class RegExpNodeView extends NodeView {
	protected node: RegExpNode;
	constructor(node: Node) {
		super(node);
	}
	toString(): string {
		return `new RegExp('${this.node.value.source}', '${this.node.value.flags}')`;
	}
}