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
	static createNode(value: any): Node {
		if (value instanceof Node) return value;
		else if (_.isString(value)) return new StringNode(value);
		else if (_.isBoolean(value)) return new BooleanNode(value);
		else if (_.isNumber(value)) return new NumberNode(value);
		else if (_.isDate(value)) return new DateNode(value);
		else if (_.isRegExp(value)) return new RegExpNode(value);
		else if (_.isFunction(value)) return new FunctionNode(value);
		else if (_.isUndefined(value)) return new UndefinedNode(value);
		else if (_.isNull(value)) return new NullNode(value);
		else if (_.isArray(value)) return new ArrayNode(value);
		else if (_.isPlainObject(value)) return new ObjectNode(value);
		throw new Error(`Не найден тип для: ${JSON.stringify(value)}`);
	}
}