import VectorNodeView from '../VectorNodeView';
import ArrayNode from '../../node/vector/ArrayNode';
import Node from '../../node/Node';

export default class ArrayNodeView extends VectorNodeView {
	protected node: ArrayNode;
	protected brackets = '[]';
	protected itemDivider = ', ';
	protected bracketDivider = '';
	constructor(node: Node) {
		super(node);
	}
}