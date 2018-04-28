import NodeView from '../NodeView';
import RegExpNode from '../../node/scalar/RegExpNode';

export default class RegExpNodeView extends NodeView {
	protected node: RegExpNode;
	toString(): string {
		return `new RegExp('${this.node.value.source}', '${this.node.value.flags}')`;
	}
}