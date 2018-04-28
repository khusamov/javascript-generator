import VectorNode from '../node/VectorNode';
import NodeView from './NodeView';
import Node from '../node/Node';

export default abstract class VectorNodeView extends NodeView {
	protected node: VectorNode;
	protected brackets;
	protected itemDivider;
	protected bracketDivider;
	toString(): string {
		return [
			this.brackets[0],
			this.node.items.map(this.itemToString.bind(this)).join(this.itemDivider),
			this.brackets[1]
		].join(this.bracketDivider);
	}
	protected itemToString(item: Node): string {
		const NodeViewFactory = require('./NodeViewFactory').default;
		return NodeViewFactory.createNodeView(item).toString();
	}
}