import StringTrimmer from '../util/StringTrimmer';

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

import NodeView from './NodeView';
import StringNodeView from './scalar/StringNodeView';
import FunctionNodeView from './scalar/FunctionNodeView';
import BooleanNodeView from './scalar/BooleanNodeView';
import DateNodeView from './scalar/DateNodeView';
import ExpressionNodeView from './scalar/ExpressionNodeView';
import NullNodeView from './scalar/NullNodeView';
import NumberNodeView from './scalar/NumberNodeView';
import RegExpNodeView from './scalar/RegExpNodeView';
import UndefinedNodeView from './scalar/UndefinedNodeView';
import ArrayNodeView from './vector/ArrayNodeView';
import ObjectNodeView from './vector/ObjectNodeView';

export default class NodeViewFactory {
	static createNodeView(node: Node): NodeView {
		if (node instanceof StringNode) return new StringNodeView(node);
		else if (node instanceof FunctionNode) return new FunctionNodeView(node);
		else if (node instanceof ArrayNode) return new ArrayNodeView(node);
		else if (node instanceof ObjectNode) return new ObjectNodeView(node);
		else if (node instanceof BooleanNode) return new BooleanNodeView(node);
		else if (node instanceof DateNode) return new DateNodeView(node);
		else if (node instanceof ExpressionNode) return new ExpressionNodeView(node);
		else if (node instanceof NullNode) return new NullNodeView(node);
		else if (node instanceof NumberNode) return new NumberNodeView(node);
		else if (node instanceof RegExpNode) return new RegExpNodeView(node);
		else if (node instanceof UndefinedNode) return new UndefinedNodeView(node);
		throw new Error(StringTrimmer.trim`
			Не найдено представление узла '${node.name}':'${node.constructor.name}' 
			со значением: ${JSON.stringify(node.value)}
		`);
	}
}