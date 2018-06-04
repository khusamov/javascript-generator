import Code from './Code';
import VectorNode from '../node/VectorNode';
import VectorNodeView from '../view/VectorNodeView';

export default abstract class VectorCode<
	T extends VectorNode = VectorNode,
	U extends VectorNodeView = VectorNodeView
> extends Code<T, U> {
	/**
	 * Флаг, который определяет, исключать из выходного кода пустые узлы или нет.
	 * @type {boolean}
	 */
	excludeEmptyNodes = false;

	protected createExpressionToString(): string {
		this.nodeView.excludeEmptyNodes = this.excludeEmptyNodes;
		return super.createExpressionToString();
	}
}