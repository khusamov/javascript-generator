import ObjectNode from '../../node/vector/ObjectNode';
import VectorCode from '../VectorCode';
import ObjectNodeView from '../../view/vector/ObjectNodeView';

export default class ObjectCode<T extends ObjectNode = ObjectNode,
	U extends ObjectNodeView = ObjectNodeView> extends VectorCode<T, U> {
	constructor(protected node: T) {
		super(node);
	}
}