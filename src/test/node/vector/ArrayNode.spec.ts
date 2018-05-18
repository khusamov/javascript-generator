import { describe, it } from 'mocha';
import { assert } from 'chai';
import { ArrayNode, ArrayNodeView } from '../../..';

describe('ArrayNode', function() {
	describe('Создание узла', function() {
		it('Пустой узел с именем', function() {
			const node1 = new ArrayNode('node1');
			assert.strictEqual<string>(node1.name, 'node1');
		});
		it('Массив строк', function() {
			const node1 = new ArrayNode('node1', ['Class1', 'Class2', 'Namespace2.sample.Class3']);
			assert.deepEqual<string[]>(node1.value, ['Class1', 'Class2', 'Namespace2.sample.Class3']);
		});
		it('Массив null', function() {
			const node1 = new ArrayNode('node1', [null, null, null, null, null]);
			assert.deepEqual<null[]>(node1.value, [null, null, null, null, null]);
		});
		it('Массив undefined', function() {
			const node1 = new ArrayNode('node1', [undefined, undefined, undefined, undefined, undefined]);
			assert.deepEqual<undefined[]>(node1.value, [undefined, undefined, undefined, undefined, undefined]);
		});
	});
	describe('Добавление элементов в пустой узел', function() {
		it('Методом add(item1, item2, ...)', function() {
			const node1 = new ArrayNode('node1');
			node1.add('Class1', 'Class2', 'Namespace2.sample.Class3');
			assert.deepEqual<string[]>(node1.value, ['Class1', 'Class2', 'Namespace2.sample.Class3']);
		});
		it('Методом add([item1, item2, ...])', function() {
			const node1 = new ArrayNode('node1');
			node1.add(['Class1', 'Class2', 'Namespace2.sample.Class3']);
			assert.deepEqual<string[][]>(node1.value, [['Class1', 'Class2', 'Namespace2.sample.Class3']]);
		});
	});
});