import Node from '../node/Node';
import NodeViewFactory from '../view/NodeViewFactory';
import NodeView from '../view/NodeView';
import Comment from './Comment';

export default abstract class Code {
	protected EOL: string = '\n';
	protected statementDeclares: string = 'const';
	protected suffix: string = ';';
	protected nodeView: NodeView;
	protected constructor(protected node: Node) {
		this.nodeView = NodeViewFactory.createNodeView(node);
	}
	toString(): string {
		const result: string[] = [];
		if (this.node.comment) result.push(new Comment(this.node.comment).toCodeString());
		result.push(`${this.statementDeclares} ${this.node.name} = ${this.nodeView.toString()}${this.suffix}`);
		return result.join(this.EOL);
	}
}