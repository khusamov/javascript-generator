import { describe, it } from 'mocha';
import { assert } from 'chai';
import { normalizeString } from '../../util';
import { NullNode, ObjectNode, ObjectNodeView, StringNode } from '../../..';

describe('ObjectNode', () => {

	it('_Комплексный пример (УБРАТь!!!)_', () => {
		const sampleObject = {
			serviceMethod: 'getPaymentsHistoryByDebtor',
			reader: {
				rootProperty: 'result.ResultItems',
				typeProperty: function(rawNode) {
					const namespace = "Pir.server.model.baseModel.type";
					return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
				}
			}
		};
		const sampleObjectAsString = `{
			serviceMethod: 'getPaymentsHistoryByDebtor',
			reader: {
				rootProperty: 'result.ResultItems',
				typeProperty: function(rawNode) {
					const namespace = "Pir.server.model.baseModel.type";
					return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
				}
			}
		}`;
		assert.equal(
			normalizeString(new ObjectNodeView(new ObjectNode('sampleObject', sampleObject)).toString()),
			normalizeString(sampleObjectAsString)
		);
	});

	it('Создание пустого узла', function() {
		const sampleObjectNode = new ObjectNode('sampleObject');
		assert.strictEqual<number>(sampleObjectNode.count, 0);
		assert.deepEqual<any>(sampleObjectNode.value, {'$$items': []});
	});

	it('Проверка наличия несуществующего свойства', function() {
		const sampleObjectNode = new ObjectNode('sampleObject');
		assert.isFalse(sampleObjectNode.has('extend'));
	});

	it('Проверка наличия существующего свойства', function() {
		const sampleObjectNode = new ObjectNode('sampleObject', { property1: null });
		assert.isTrue(sampleObjectNode.has('property1'));
	});

	it('Получение дочернего узла', function() {
		const sampleObjectNode = new ObjectNode('sampleObject', { property1: null });
		assert.instanceOf<NullNode>(sampleObjectNode.down<NullNode>('property1'), NullNode);
	});

	it('Добавление свойства', function() {
		const sampleObjectNode = new ObjectNode('sampleObject');
		sampleObjectNode.add('property1', StringNode);
		assert.instanceOf<StringNode>(sampleObjectNode.get<StringNode>('property1'), StringNode);
		assert.isUndefined<string>(sampleObjectNode.get<StringNode>('property1').value);
	});

});