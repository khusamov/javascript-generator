import { describe, it } from 'mocha';
import { assert } from 'chai';
import { ObjectNode, ObjectNodeView } from '../../..';
import { normalizeString } from '../../util';

describe('ObjectNode', () => {

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

	it('Образец объекта', () => {
		assert.equal(
			normalizeString(new ObjectNodeView(new ObjectNode(sampleObject)).toString()),
			normalizeString(sampleObjectAsString)
		);
	});

});