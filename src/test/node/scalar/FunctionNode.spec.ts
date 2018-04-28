import { describe, it } from 'mocha';
import { assert } from 'chai';
import { FunctionNode, FunctionNodeView } from '../../..';

describe('FunctionNode', () => {

	const sampleFunction = function(rawNode) {
		const namespace = "Pir.server.model.baseModel.type";
		return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
	};

	const sampleArrowFunction = rawNode => {
		const namespace = "Pir.server.model.baseModel.type";
		return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
	};

	it('Обычная функция', () => {
		const actual: string = new FunctionNodeView(new FunctionNode(sampleFunction)).toString();
		const expected: string = sampleFunction.toString();
		assert.notEqual<string>(actual, expected);
		assert.equal<string>(actual, expected.replace('function (', 'function('));
	});

	it('Стрелочная функция с параметром', () => {
		assert.equal<string>(
			new FunctionNodeView(new FunctionNode(sampleArrowFunction)).toString(),
			sampleArrowFunction.toString()
		);
	});

});