import ScalarNode from '../ScalarNode';
import FunctionNode from './FunctionNode';

export default class ExpressionNode extends ScalarNode<string> {
	/**
	 * Создание безымянного ExpressionNode узла.
	 * Функция шаблонизации (https://learn.javascript.ru/es-string).
	 * @param {TemplateStringsArray} strings
	 * @param {string} vars
	 * @returns {FunctionNode}
	 */
	static nameless(strings: TemplateStringsArray, ...vars: string[]): ExpressionNode {
		const str = strings.map((s, i) => s + (i === vars.length ? '' : vars[i])).join('');
		return new this(undefined, str);
	}
}