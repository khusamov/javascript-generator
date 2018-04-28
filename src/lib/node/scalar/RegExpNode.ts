import ScalarNode from '../ScalarNode';

export default class RegExpNode extends ScalarNode {
	get value(): RegExp {
		return super.value as RegExp;
	}
	set value(value: RegExp) {
		super.value = value;
	}
}