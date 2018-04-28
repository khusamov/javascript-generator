import NodeView from '../NodeView';
import StringNode from '../../node/scalar/StringNode';

export default class StringNodeView extends NodeView {
	protected node: StringNode;
	toString(): string {
		return this.node.isMultiLine ? `\`${this.node.value}\`` : `'${this.node.value}'`;
	}
}