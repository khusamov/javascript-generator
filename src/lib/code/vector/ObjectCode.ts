import ObjectNode from '../../node/vector/ObjectNode';
import VectorCode from '../VectorCode';
import ObjectNodeView from '../../view/vector/ObjectNodeView';

export default class ObjectCode extends VectorCode<ObjectNode, ObjectNodeView> {
	constructor(protected node: ObjectNode) {
		super(node);
	}
}