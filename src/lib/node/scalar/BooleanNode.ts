import ScalarNode from '../ScalarNode';

export default class BooleanNode extends ScalarNode {
	get value(): boolean | Boolean {
		return super.value;
	}
	set value(value: boolean | Boolean) {
		super.value = value;
	}
}