import { describe, it } from 'mocha';
import { assert } from 'chai';
import { NumberNode, NumberNodeView } from '../../..';

describe('NumberNode', function() {

	const sampleIntegerNumber: number = 123456789;
	const sampleNumbers: number[] = [
		0,
		sampleIntegerNumber,
		-sampleIntegerNumber,
		Math.random(),
		-Math.random()
	];

	describe('Литерал: number', function() {
		sampleNumbers.forEach(sampleNumber => {
			it(String(sampleNumber).valueOf(), () => {
				assert.equal<string>(
					new NumberNodeView(new NumberNode('sampleNumber', sampleNumber)).toString(),
					String(sampleNumber).valueOf()
				);
			});
		});
	});

	describe('Объект: new Number()', function() {
		sampleNumbers.forEach(sampleNumber => {
			const sampleNumberObject = new Number(sampleNumber);
			it('new Number(' + String(sampleNumberObject).valueOf() + ')', () => {
				assert.equal<string>(
					new NumberNodeView(new NumberNode('sampleNumberObject', sampleNumberObject)).toString(),
					`new Number(${String(sampleNumberObject).valueOf()})`
				);
			});
		});
	});

});