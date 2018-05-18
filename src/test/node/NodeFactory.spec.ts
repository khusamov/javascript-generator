import { describe, it } from 'mocha';
import { assert } from 'chai';
import { NodeFactory } from '../..';

describe('Создание узла', function() {
	it('Создание узла на основе массива', function() {
		const node1 = NodeFactory.createNode(undefined, ['Class1', 'Class2', 'Namespace2.sample.Class3']);
		assert.deepEqual(node1.value, ['Class1', 'Class2', 'Namespace2.sample.Class3']);
	});
});