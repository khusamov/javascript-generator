import * as _ from 'lodash';
import { describe, it } from 'mocha';
import { assert } from 'chai';
import { ObjectCode, ObjectNode } from '../../..';
import { normalizeString } from '../../util';

describe('ObjectCode', function() {

	const objectSample = {
		serviceMethod: 'getPaymentsHistoryByDebtor',
		reader: {
			rootProperty: 'result.ResultItems',
			typeProperty: function(rawNode) {
				const namespace = "Pir.server.model.baseModel.type";
				return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
			}
		}
	};

	const objectSampleString = `
		const objectSample = {
			serviceMethod: 'getPaymentsHistoryByDebtor',
			reader: {
				rootProperty: 'result.ResultItems',
				typeProperty: function(rawNode) {
					const namespace = "Pir.server.model.baseModel.type";
					return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
				}
			}
		};
	`;

	it('create', function() {
		const objectNodeSample = new ObjectNode(_.cloneDeep(objectSample));
		objectNodeSample.name = 'objectSample';
		const objectCodeSample = new ObjectCode(objectNodeSample);
		assert.equal(
			normalizeString(objectCodeSample.toString()),
			normalizeString(objectSampleString)
		);
	});

	it('add', function() {
		const objectNodeSample = new ObjectNode(_.cloneDeep(objectSample));
		objectNodeSample.comment = 'Комментарий к objectSample.';
		objectNodeSample.name = 'objectSample';
		objectNodeSample.add('property1', {a:'a',b:'b'}, 'Комментарий к property1.');
		const objectCodeSample = new ObjectCode(objectNodeSample);
		assert.equal(
			normalizeString(objectCodeSample.toString()),
			normalizeString(`
				// **
				// * Комментарий к objectSample.
				// *
				const objectSample = {
					serviceMethod: 'getPaymentsHistoryByDebtor',
					reader: {
						rootProperty: 'result.ResultItems',
						typeProperty: function(rawNode) {
							const namespace = "Pir.server.model.baseModel.type";
							return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
						}
					},
					// **
					// * Комментарий к property1.
					// *
					property1: {
						a: 'a',
						b: 'b'
					}
				};
			`)
		);
	});

});