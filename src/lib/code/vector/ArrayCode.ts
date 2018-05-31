import ArrayNode from '../../node/vector/ArrayNode';
import VectorCode from '../VectorCode';
import ArrayNodeView from '../../view/vector/ArrayNodeView';

export default class ArrayCode extends VectorCode<ArrayNode, ArrayNodeView> {
	constructor(protected node: ArrayNode) {
		super(node);
	}
}