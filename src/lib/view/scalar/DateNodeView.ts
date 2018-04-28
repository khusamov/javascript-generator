import NodeView from '../NodeView';
import DateNode from '../../node/scalar/DateNode';

export default class DateNodeView extends NodeView {
	protected node: DateNode;
	toString(): string {
		return `new Date('${this.node.value.toUTCString()}')`;
	}
}