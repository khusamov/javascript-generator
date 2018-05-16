import { describe, it } from 'mocha';
import { assert } from 'chai';
import {
	DateNode,
	BooleanNode,
	ExpressionNode,
	FunctionNode,
	NullNode,
	RegExpNode,
	StringNode,
	UndefinedNode,
	ArrayNode,
	ObjectNode,
	isTDerivedNodeClass
} from '../..';

describe('Node', function() {
	describe('isTDerivedNodeClass', function() {
		const nodes = {
			BooleanNode: new BooleanNode('node1', true),
			DateNode: new DateNode('node1', new Date),
			ExpressionNode: new ExpressionNode('node1', ''),
			FunctionNode: new FunctionNode('node1', function() {}),
			NullNode: new NullNode('node1', null),
			NumberNode: new NullNode('node1', 0),
			RegExpNode: new RegExpNode('node1', new RegExp('')),
			StringNode: new StringNode('node1', ''),
			UndefinedNode: new UndefinedNode('node1', undefined),
			ArrayNode: new ArrayNode('node1', []),
			ObjectNode: new ObjectNode('node1', {})
		};
		for (let nodeType in nodes) {
			it(nodeType, function() {
				assert.isTrue<boolean>(isTDerivedNodeClass(nodes[nodeType]));
			});
		}
	});
});