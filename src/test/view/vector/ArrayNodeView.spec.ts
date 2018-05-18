import { describe, it } from 'mocha';
import { assert } from 'chai';
import { ArrayNode, ArrayNodeView } from '../../..';

describe('ArrayNodeView', function() {

	function normalizeString(str: string): string {
		const EOL = '\n';
		return str.split(EOL).map(str => str.trim()).join(EOL);
	}

	function assertArrayTypeEqual(actual: any[], expected: string, message?: string): void {
		assert.equal<string>(
			normalizeString(new ArrayNodeView(new ArrayNode('arrayName', actual)).toString()),
			normalizeString(expected),
			message
		);
	}

	it('Числа', () => {
		assertArrayTypeEqual([1, 2, 3, 4, 5], '[1, 2, 3, 4, 5]');
	});

	it('Строки', () => {
		assertArrayTypeEqual(['1', '2', '3', '4', '5'], `['1', '2', '3', '4', '5']`);
	});

	it('Числа и строки', () => {
		assertArrayTypeEqual(['1', 2, '3', '4', 5], `['1', 2, '3', '4', 5]`);
	});

	it('Объекты', () => {
		assertArrayTypeEqual([{
			a: 'a',
			b: 'b'
		}, {
			a: 'a'
		}, 3, 4, 5], `[{ 
			a: 'a', 
			b: 'b'
		}, { 
			a: 'a'
		}, 3, 4, 5]`);
	});

	it('Функции', () => {
		assertArrayTypeEqual(
			[function() {}, function funcName() {}],
			`[function() { }, function funcName() { }]`
		);
	});

	it('Стрелочные функции', () => {
		assertArrayTypeEqual(
			[() => {}, param1 => {}, (param1, param2) => {}],
			`[() => { }, param1 => { }, (param1, param2) => { }]`
		);
	});

	it('null', () => {
		assertArrayTypeEqual([null, null, null, null, null], '[null, null, null, null, null]');
	});

	it('undefined', () => {
		assertArrayTypeEqual([undefined, undefined], '[undefined, undefined]');
	});

	it('Регулярные выражения', () => {
		assertArrayTypeEqual(
			[/regularexpression/g, /regularexpression/ig],
			`[new RegExp('regularexpression', 'g'), new RegExp('regularexpression', 'gi')]`
		);
	});

});