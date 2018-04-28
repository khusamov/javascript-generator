import ScalarNode from '../ScalarNode';

export default class DateNode extends ScalarNode {
	get value(): Date {
		return super.value as Date;
	}
	set value(value: Date) {
		super.value = value;
	}
}