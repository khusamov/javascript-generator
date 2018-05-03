import DateNode from '../../node/scalar/DateNode';
import Code from '../Code';
import Node from '../../node/Node';

export default class DateCode extends Code {
	protected node: DateNode;
	constructor(node: Node) {
		super(node);
	}
}