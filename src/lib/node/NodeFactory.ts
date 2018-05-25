import * as _ from 'lodash';
import Node from './Node';
import StringNode from './scalar/StringNode';
import BooleanNode from './scalar/BooleanNode';
import NumberNode from './scalar/NumberNode';
import DateNode from './scalar/DateNode';
import RegExpNode from './scalar/RegExpNode';
import FunctionNode from './scalar/FunctionNode';
import UndefinedNode from './scalar/UndefinedNode';
import NullNode from './scalar/NullNode';
import ArrayNode from './vector/ArrayNode';
import ObjectNode from './vector/ObjectNode';

export default class NodeFactory {
	/**
	 * Создание узла на основе типа его значения.
	 * Внимание! Этим методом нельзя создать такие узлы как ExpressionNode
	 * и FunctionNode (вариант когда функция задана в виде текста).
	 * @param {string | undefined} name
	 * @param {any} value
	 * @returns {Node}
	 */
	static createNode(name: string | undefined, value: any): Node {
		if (value instanceof Node) return value;
		else if (_.isString(value)) return new StringNode(name, value);
		else if (_.isBoolean(value)) return new BooleanNode(name, value);
		else if (_.isNumber(value)) return new NumberNode(name, value);
		else if (_.isDate(value)) return new DateNode(name, value);
		else if (_.isRegExp(value)) return new RegExpNode(name, value);
		else if (_.isFunction(value)) return new FunctionNode(name, value);
		else if (_.isUndefined(value)) return new UndefinedNode(name, value);
		else if (_.isNull(value)) return new NullNode(name, value);
		else if (_.isArray(value)) return new ArrayNode(name, value);
		else if (_.isPlainObject(value)) return new ObjectNode(name, value);
		throw new Error(`Не найден тип для: ${JSON.stringify(name, value)}`);
	}
}