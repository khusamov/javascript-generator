import NullNode from '../../node/scalar/NullNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class NullCode extends Code {
	protected node: NullNode;
	constructor(node: Node) {
		super(node);
	}
}