import VectorNode from '../node/VectorNode';
import NodeView from './NodeView';
import Node from '../node/Node';
import Comment from '../code/Comment';

export default abstract class VectorNodeView extends NodeView {
	protected node: VectorNode;
	protected brackets;
	protected itemDivider;
	protected bracketDivider;
	protected EOL: string = '\n';
	toString(): string {
		return [
			this.brackets[0],
			this.node.items.map(item => {
				const result: string[] = [];
				if (item.comment) result.push(new Comment(item.comment).toCodeString());
				result.push(this.itemToString(item));
				return result.join(this.EOL);
			}).join(this.itemDivider),
			this.brackets[1]
		].join(this.bracketDivider);
	}
	protected itemToString(item: Node): string {
		const NodeViewFactory = require('./NodeViewFactory').default;
		return NodeViewFactory.createNodeView(item).toString();
	}
}