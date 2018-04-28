import { describe, it } from 'mocha';
import { assert } from 'chai';
import { StringNode, StringNodeView } from '../../..';

describe('StringNode', () => {

	const sampleStrings: string[] = [
		'Александр Сергеевич Пушкин имеет репутацию великого русского поэта',
		'"Александр Сергеевич Пушкин" имеет репутацию великого русского поэта',
		'`Александр Сергеевич Пушкин` имеет репутацию великого русского поэта',
		"'Александр Сергеевич Пушкин' имеет репутацию великого русского поэта",
		`
			Александр Сергеевич Пушкин 
			имеет репутацию 
			великого русского поэта
		`
	];

	const isMultiLine = str => str.split('\n').length > 1;

	sampleStrings.forEach(sampleString => {
		it((isMultiLine(sampleString) ? 'Много строк: ' + sampleString.replace(/\n/g, '\\n') : sampleString), () => {
			assert.equal(
				new StringNodeView(new StringNode(sampleString)).toString(),
				isMultiLine(sampleString) ? `\`${sampleString}\`` : `'${sampleString}'`
			);
		});
	});

});