import ScalarNode from '../ScalarNode';

export default class NumberNode extends ScalarNode {
	get value(): number | Number {
		return super.value;
	}
	set value(value: number | Number) {
		super.value = value;
	}
}