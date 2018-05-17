import { describe, it } from 'mocha';
import { assert } from 'chai';
import {
	Node,
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
	describe('Создание абстрактного узла', function() {
		it('Имя узла', function() {
			class SampleNode extends Node {}
			const node1 = new SampleNode('node1');
			assert.strictEqual<string>(node1.name, 'node1');
		});
		it('Значение узла', function() {
			class SampleNode extends Node {}
			const node1value1 = {};
			const node1value2 = {};
			const node1 = new SampleNode('node1', node1value1);
			assert.strictEqual<object>(node1.value, node1value1);
			node1.value = node1value2;
			assert.strictEqual<object>(node1.value, node1value2);
		});
		it('Комментарий к узлу', function() {
			class SampleNode extends Node {}
			const node1 = new SampleNode('node1');
			node1.comment = 'Комментарий к узлу';
			assert.strictEqual<string>(node1.comment, 'Комментарий к узлу');
		});
	});
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