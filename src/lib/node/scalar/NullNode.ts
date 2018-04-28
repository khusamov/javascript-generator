import ScalarNode from '../ScalarNode';

export default class NullNode extends ScalarNode {
	get value(): null {
		return super.value as null;
	}
	set value(value: null) {
		super.value = value;
	}
}