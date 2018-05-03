import Code from '../Code';
import Comment from '../Comment';
import FunctionNode from '../../node/scalar/FunctionNode';
import Node from '../../node/Node';

export default class FunctionCode extends Code {
	protected node: FunctionNode;
	constructor(node: Node) {
		super(node);
	}
	toString(): string {
		const result: string[] = [];
		if (this.node.comment) result.push(new Comment(this.node.comment).toCodeString());
		if (this.node.isArrowFunction || this.node.isMethodFunction) {
			result.push(`${this.statementDeclares} ${this.node.name} = ${this.nodeView.toString()}${this.suffix}`);
		} else {
			result.push(this.nodeView.toString());
		}
		return result.join(this.EOL);
	}
}