import Node from '../node/Node';

export default abstract class NodeView {
	protected constructor(protected node: Node) {}
	toString(): string {
		return String(this.node.value).valueOf();
	}
}