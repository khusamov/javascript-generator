import Node from '../node/Node';

export default class NodeView {
	constructor(protected node: Node) {}
	toString(): string {
		return String(this.node.value).valueOf();
	}
}