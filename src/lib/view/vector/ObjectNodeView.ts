import VectorNodeView from '../VectorNodeView';
import ObjectNode from '../../node/vector/ObjectNode';
import Node from '../../node/Node';
import FunctionNode from '../../node/scalar/FunctionNode';

export default class ObjectNodeView extends VectorNodeView {
	protected node: ObjectNode;
	protected brackets = '{}';
	protected itemDivider = ',\n';
	protected bracketDivider = '\n';
	constructor(node: Node) {
		super(node);
	}
	protected itemToString(item: Node): string {
		const NodeViewFactory = require('../NodeViewFactory').default;
		return (
			item instanceof FunctionNode && item.isMethodFunction
				? item.value.toString()
				: [item.name, NodeViewFactory.createNodeView(item).toString()].join(': ')
		);
	}
}