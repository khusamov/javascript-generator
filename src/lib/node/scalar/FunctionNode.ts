import ScalarNode from '../ScalarNode';

export default class FunctionNode extends ScalarNode {
	get value(): Function {
		return super.value as Function;
	}
	set value(value: Function) {
		super.value = value;
	}
	get isMethodFunction(): boolean {
		return this.value.toString().indexOf('function') !== 0 && !this.isArrowFunction;
	}
	get isArrowFunction(): boolean {
		const match = this.value.toString().match(/.*?=>/);
		return match ? !match[0].match(/.+?\(/) : false;
	}
}