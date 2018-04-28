import ScalarNode from '../ScalarNode';

export default class UndefinedNode extends ScalarNode {
	get value(): undefined {
		return super.value as undefined;
	}
	set value(value: undefined) {
		super.value = value;
	}
}