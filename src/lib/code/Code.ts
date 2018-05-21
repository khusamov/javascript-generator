import Node from '../node/Node';
import NodeViewFactory from '../view/NodeViewFactory';
import NodeView from '../view/NodeView';
import Comment from './Comment';

/**
 * Класс генерации строкового представления узла.
 */
export default abstract class Code<T extends Node = Node> {
	protected EOL: string = '\n';
	protected statementDeclares: string = 'const';
	protected suffix: string = ';';
	protected nodeView: NodeView;
	protected constructor(protected node: T) {
		this.nodeView = NodeViewFactory.createNodeView(node);
	}

	/**
	 * Генерация строкового представления.
	 * Представление состоит из двух частей: комментарий и создание узла на основе его имени.
	 * @returns {string}
	 */
	toString(): string {
		const result: string[] = [];
		if (this.node.comment) result.push(this.commentToString());
		result.push(this.createExpressionToString());
		return result.join(this.EOL);
	}

	protected commentToString(): string {
		return new Comment(this.node.comment).toCodeString();
	}

	protected createExpressionToString(): string {
		return `${this.statementDeclares} ${this.node.name} = ${this.nodeView.toString()}${this.suffix}`;
	}
}