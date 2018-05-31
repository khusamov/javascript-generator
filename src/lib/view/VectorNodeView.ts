import VectorNode from '../node/VectorNode';
import NodeView from './NodeView';
import Node from '../node/Node';
import Comment from '../code/Comment';

export default abstract class VectorNodeView extends NodeView {
	protected node: VectorNode;
	protected brackets;
	protected itemDivider;
	protected bracketDivider;
	protected EOL: string = '\n';

	/**
	 * Флаг, который определяет, исключать из выходного кода пустые узлы или нет.
	 * @type {boolean}
	 */
	excludeEmptyNodes = false;

	/**
	 * Строковое представление коллекции.
	 * Оборачивается в скобки и каждый элемент коллекции размещается между ними с делителем.
	 * @returns {string}
	 */
	toString(): string {
		return [
			this.brackets[0],
			(
				this.node.items
					// Если опция excludeEmptyNodes === true, то исключаем пустые узлы.
					.filter(item => !(this.excludeEmptyNodes && item.isEmpty))
					// Строковое представление элемента коллекции.
					// Состоит из комментария и строкового представления элемента,
					// который определяется методом itemToString().
					.map(item => {
						const result: string[] = [];
						if (item.comment) result.push(new Comment(item.comment).toCodeString());
						result.push(this.itemToString(item));
						return result.join(this.EOL);
					})
					// Добавляем делитель между элементами.
					.join(this.itemDivider)
			),
			this.brackets[1]
		].join(this.bracketDivider);
	}

	/**
	 * Строковое представление элемента коллекции.
	 * @param {Node} item
	 * @returns {string}
	 */
	protected itemToString(item: Node): string {
		const NodeViewFactory = require('./NodeViewFactory').default;
		return NodeViewFactory.createNodeView(item).toString();
	}
}