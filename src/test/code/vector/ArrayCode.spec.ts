import * as _ from 'lodash';
import { describe, it } from 'mocha';
import { assert } from 'chai';
import { ArrayCode, ArrayNode } from '../../..';
import { normalizeString } from '../../util';

describe('ArrayCode', function() {

	const arraySample = [{
		type: 'datefield',
		name: 'startDate',
		fieldLabel: 'Начало'
	}, {
		type: 'datefield',
		name: 'endDate',
		fieldLabel: 'Конец'
	}];

	it('add', function() {
		const arrayNodeSample = new ArrayNode('arraySample', _.cloneDeep(arraySample));
		arrayNodeSample.add({
			type: 'textfield',
			name: 'password',
			fieldLabel: 'Пароль'
		});
		const arrayCodeSample = new ArrayCode(arrayNodeSample);
		assert.equal(
			normalizeString(arrayCodeSample.toString()),
			normalizeString(`
				const arraySample = [{
					type: 'datefield',
					name: 'startDate',
					fieldLabel: 'Начало'
				}, {
					type: 'datefield',
					name: 'endDate',
					fieldLabel: 'Конец'
				}, {
					type: 'textfield',
					name: 'password',
					fieldLabel: 'Пароль'
				}];
			`)
		);
	});

});