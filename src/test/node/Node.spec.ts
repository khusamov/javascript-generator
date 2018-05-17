import { describe, it } from 'mocha';
import { assert } from 'chai';
import {
	BooleanNode,
	DateNode,
	ExpressionNode,
	FunctionNode,
	NullNode,
	NumberNode,
	RegExpNode,
	StringNode,
	UndefinedNode,
	ArrayNode,
	ObjectNode,
	isTDerivedNodeClass
} from '../..';

describe('Node', function() {
	describe('isTDerivedNodeClass', function() {
		describe('Класс наследуется от Node', function() {
			const nodes = {
				BooleanNode: BooleanNode,
				DateNode: DateNode,
				ExpressionNode: ExpressionNode,
				FunctionNode: FunctionNode,
				NullNode: NullNode,
				NumberNode: NumberNode,
				RegExpNode: RegExpNode,
				StringNode: StringNode,
				UndefinedNode: UndefinedNode,
				ArrayNode: ArrayNode,
				ObjectNode: ObjectNode
			};
			for (let nodeType in nodes) {
				it(nodeType, function() {
					assert.isTrue<boolean>(isTDerivedNodeClass(nodes[nodeType]));
				});
			}
		});
		describe('Класс не наследуется от Node', function() {
			it('Класс не наследуется от Node', function() {
				assert.isFalse<boolean>(isTDerivedNodeClass(Date));
			});
		});
	});
});