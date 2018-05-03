import Node from '../node/Node';
import StringNode from '../node/scalar/StringNode';
import FunctionNode from '../node/scalar/FunctionNode';
import BooleanNode from '../node/scalar/BooleanNode';
import DateNode from '../node/scalar/DateNode';
import ExpressionNode from '../node/scalar/ExpressionNode';
import NullNode from '../node/scalar/NullNode';
import NumberNode from '../node/scalar/NumberNode';
import RegExpNode from '../node/scalar/RegExpNode';
import UndefinedNode from '../node/scalar/UndefinedNode';
import ArrayNode from '../node/vector/ArrayNode';
import ObjectNode from '../node/vector/ObjectNode';

import DateCode from './scalar/DateCode';
import StringCode from './scalar/StringCode';
import NullCode from './scalar/NullCode';
import BooleanCode from './scalar/BooleanCode';
import RegExpCode from './scalar/RegExpCode';
import ObjectCode from './vector/ObjectCode';
import FunctionCode from './scalar/FunctionCode';
import NumberCode from './scalar/NumberCode';
import ArrayCode from './vector/ArrayCode';
import ExpressionCode from './scalar/ExpressionCode';
import UndefinedCode from './scalar/UndefinedCode';
import StringTrimmer from '../util/StringTrimmer';

import Code from './Code';

export default class CodeFactory {
	static createCode(node: Node): Code {
		if (node instanceof StringNode) return new StringCode(node);
		else if (node instanceof FunctionNode) return new FunctionCode(node);
		else if (node instanceof BooleanNode) return new BooleanCode(node);
		else if (node instanceof DateNode) return new DateCode(node);
		else if (node instanceof ExpressionNode) return new ExpressionCode(node);
		else if (node instanceof NullNode) return new NullCode(node);
		else if (node instanceof NumberNode) return new NumberCode(node);
		else if (node instanceof RegExpNode) return new RegExpCode(node);
		else if (node instanceof UndefinedNode) return new UndefinedCode(node);
		else if (node instanceof ArrayNode) return new ArrayCode(node);
		else if (node instanceof ObjectNode) return new ObjectCode(node);
		throw new Error(StringTrimmer.trim`
			Не найдено представление узла '${node.name}':'${node.constructor.name}' 
			со значением: ${JSON.stringify(node.value)}
		`);
	}
}