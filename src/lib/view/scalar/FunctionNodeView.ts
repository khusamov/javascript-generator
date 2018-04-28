import NodeView from '../NodeView';
import FunctionNode from '../../node/scalar/FunctionNode';

export default class FunctionNodeView extends NodeView {
	protected node: FunctionNode;
	toString(): string {
		return this.node.value.toString().replace(
			this.node.isMethodFunction
				? /.*?\(/
				: 'function (', 'function('
		);
	}
}