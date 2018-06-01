import ArrayNode from '../../node/vector/ArrayNode';
import VectorCode from '../VectorCode';
import ArrayNodeView from '../../view/vector/ArrayNodeView';

export default class ArrayCode<T extends ArrayNode = ArrayNode,
	U extends ArrayNodeView = ArrayNodeView> extends VectorCode<T, U> {
	constructor(protected node: T) {
		super(node);
	}
}