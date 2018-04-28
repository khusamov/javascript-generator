import { describe, it } from 'mocha';
import { assert } from 'chai';
import { BooleanNode, BooleanNodeView } from '../../..';

describe('BooleanNode', () => {
	[true, false].forEach(sampleBoolean => {
		it(String(sampleBoolean).valueOf().toUpperCase(), () => {
			assert.equal<string>(
				new BooleanNodeView(new BooleanNode(sampleBoolean)).toString(),
				String(sampleBoolean).valueOf()
			);
		});
	});
});